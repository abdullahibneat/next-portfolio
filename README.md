# Next Portfolio

A software portfolio following the Jamstack architecture, statically built using NextJS with content managed through the headless Sanity CMS.

Want to host your own portfolio using this template? Click the button below and get started in minutes to deploy your website on Vercel!

<p align="center">
	<a href="https://www.sanity.io/create?template=abdullahibneat/next-portfolio" target="_blank">
		<img src="https://img.shields.io/badge/SANITY-CREATE%20PROJECT-green?&style=flat-square&labelColor=black&color=rgb(240,62,47)" alt="Create your portfolio using this template"/>
	</a>
</p>

![Homepage of my portfolio](https://i.imgur.com/5Rt11cl.jpg)

### Features

- Light and dark mode depending on system preferences
- Responsive design
- Images are optimized using the `@next/image` component
- Fully customizable text and content through Sanity CMS
- SEO friendly projects and pages
- Social image generator for projects
- Easy contact form setup using Formspree
- Set up redirects from Sanity studio

## Get started

### One-click deploy (Recommended way)

Quickly and easily deploy your own portfolio by pressing the link below:

<p align="center">
	<a href="https://www.sanity.io/create?template=abdullahibneat/next-portfolio" target="_blank">
		<img src="https://img.shields.io/badge/SANITY-CREATE%20PROJECT-green?&style=flat-square&labelColor=black&color=rgb(240,62,47)" alt="Create your portfolio using this template"/>
	</a>
</p>

It will create a new Sanity project, deploy the website to Vercel, and set up all the environment variables for you! It will then load your website with placeholder content for you to change as you wish.

### Local development

 1. Install the Sanity CLI globally: `npm install -g @sanity/cli`
 2. Clone the repo and run `npm install`. This will install both template and Sanity dependencies
 3. `cd sanity` and `sanity init` to create a new Sanity project (use default settings)
 4. *Optional but highly recommended*: Load some sample content to Sanity:

```
cd sanity
sanity dataset import ../.sanity-template/data/production.tar.gz
# When prompted to select a dataset, select the existing "production" dataset
```
 5. While you're in the `sanity` folder, run the Sanity studio: `npm start`. It will be available at `http://localhost:3333`
 6. **In a new terminal window** navigate back to the root directory and create a `.env.local` file with the following content:
	 - You can find the Sanity project ID in `sanity/sanity.json` or by visiting the [Sanity Manage](https://www.sanity.io/manage) page, select your project and it will be displayed near the top

```
SANITY_STUDIO_API_PROJECT_ID=your_sanity_id_here
```

 7. Run `npm run dev`. The portfolio will be available at `http://localhost:3000`