import chromium from "chrome-aws-lambda"
import ejs from "ejs"
import { NextApiHandler } from "next"

type Body = {
    width: number,
    height: number,
    title: string,
    categories?: string[],
    image?: string
}

const defaultParams = {
    width: 1200,
    height: 675,
    categories: [],
    image: null
}

const generateImage: NextApiHandler = async ({ body }, res) => {
    // Parse body as JSON
    if(typeof body !== "object") try {
        body = JSON.parse(body)
    } catch(_) {
        return res.status(400).json({ error: "Body must contain JSON data!" })
    }

    // Overwrite default parameters using data from req body
    const data: Body = { ...defaultParams, ...body }

    if(!data.title) return res.status(400).json({ error: "Title is required as query parameter." })
    if(typeof data.title !== "string") return res.status(400).json({ error: "Title must be a string." })
    if(typeof data.width !== "number") return res.status(400).json({ error: "Width must be a number." })
    if(typeof data.height !== "number") return res.status(400).json({ error: "Height must be a number." })
    if(!Array.isArray(data.categories)) return res.status(400).json({ error: "Categories must be an array of strings." })

    try {
        // Launch Chrome instance
        const browser = await chromium.puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
        })

        // Create new page
        let page = await browser.newPage()
        await page.setViewport({
            width: data.width,
            height: data.height
        })

        // Render EJS template
        // Unfortunately the template cannot be stored in a separate file since NextJS
        // will ignore any non JS files in the API folder. Therefore the template is stored
        // as a variable below.
        const content = await ejs.render(template, data)
        await page.setContent(content)

        // Take screenshot and send back as response
        const screenshot = await page.screenshot()
        res.setHeader("Content-Type", "image/png")
        return res.end(screenshot)
    } catch(e) {
        console.error(e)
        return res.status(500).json({ error: e.message || "An unexpected error occured." })
    }
}

// Enable CORS
const cors = require("micro-cors")()

export default cors(generateImage)

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #F4A261;
        }
        * {
            margin: 0;
            padding: 0;
        }
        html {
            height: 100%;
            display: flex;
            flex-direction: column;
            font-size: 36px;
            font-size: 3vw;
            font-family: "Inter", sans-serif;
            background-image: radial-gradient(rgba(0,0,0,0.3) 1px, transparent 0);
            background-size: 40px 40px;
            overflow: hidden;
        }
        body {
            flex: 1;
            padding: 2rem;
            position: relative;
            overflow: hidden;
        }
        h1 {
            margin-bottom: 0.5rem;
            font-size: 100px;
        }
        .categories > span {
            display: inline-flex;
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
            margin-bottom: 0.3rem;
            border-radius: 0.75rem;
            background: var(--primary-color);
        }
        img, .logo {
            position: absolute;
        }
        img {
            height: 10rem;
            width: 15rem;
            object-fit: contain;
            object-position: right;
            bottom: 0; right: 0;
            z-index: -1;
        }
        .logo {
            bottom: 2rem; left: 2rem;
            color: var(--primary-color);
        }
        svg {
            height: 3rem;
        }
    </style>
</head>
<body>
    <div>
        <h1><%= title %></h1>
        <% if(categories) { %>
            <div class="categories">
                <% categories.forEach(function(item) { %>
                    <span> <%= item %> </span>
                <% }) %>
            </div>
        <% } %>
    </div>
    <% if(image) { %>
        <img src="<%= image %>" alt="">
    <% } %>
    <div class="logo">
        <svg viewBox="0 0 165 165" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M154.5,165a10.48,10.48,0,0,1-5.82-1.76L82.5,119.12,16.32,163.24A10.5,10.5,0,0,1,1.11,149.8l72-144a10.5,10.5,0,0,1,18.78,0l72,144A10.5,10.5,0,0,1,154.5,165Zm-53.07-58.5,26,17.33-13-26ZM50.57,97.83l-13,26,26-17.33ZM60,78.91l22.46,15,22.46-15L82.5,34Z"/></svg>
    </div>
</body>
</html>
`