import React from "react"
import sanityClient from "part:@sanity/base/client"

const client = sanityClient.withConfig({apiVersion: "2021-05-07"})

// Function to return the title, categories and image of a Project document
const getFields = async _id => {
	return await client.fetch(`
		*[_id == $_id][0] {
			title,
            "categories": categories[]->name,
            "image": mockup.asset->url,
		}
	`, { _id })
}

// Function to make a POST request to the "generateOGimage" endpoint (see: /pages/api/generateOGimage)
const getImage = async body => {
	const req = await fetch(process.env.SANITY_STUDIO_OG_ENDPOINT, {
		method: "POST",
		body: JSON.stringify(body)
	})
	return await req.blob()
}

const Component = ({ document, onSelect }) => {
	// Start generating image as soon as the "generate" button is pressed
	(async () => {
		const body = await getFields(document._id)
		const image = await getImage(body)

		// For more info on onSelect, see https://www.sanity.io/docs/custom-asset-sources#72befb7528f0
		onSelect([{
			kind: "file",
			value: image,
			options: {
				originalFileName: `${document.title}-ft.png`
			}
		}])
	})()

	return <div>Generating image...</div>
}

export default {
	title: "Generate OG image",
	name: "og-image-generator",
	component: Component
}