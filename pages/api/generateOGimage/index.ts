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
        const template = await ejs.renderFile(__dirname + "/template.ejs", data)
        await page.setContent(template)

        // Take screenshot and send back as response
        const screenshot = await page.screenshot()
        res.setHeader("Content-Type", "image/png")
        return res.end(screenshot)
    } catch(e) {
        console.error(e)
        return res.status(500).json({ error: e.message || "An unexpected error occured." })
    }
}

export default generateImage