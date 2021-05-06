import React, { useEffect } from "react"

const Component = ({ document, onSelect }) => {

	useEffect(() => {
		// Call the endpoint to generate the image
		// TODO: Pass categories and mockup image
		fetch(process.env.SANITY_STUDIO_OG_ENDPOINT, {
			method: "POST",
			body: JSON.stringify({ title: document.title })
		})
		// Convert to blob
		.then(res => res.blob())
		// Pass the blob as a file back to Sanity
		.then(blob => onSelect([{
			kind: "file",
			value: blob,
			options: {
				originalFileName: `${document.title}-ft.png`
			}
		}]))
	}, [])

	return <div>Generating image...</div>
}

export default {
	title: "Generate OG image",
	name: "og-image-generator",
	component: Component
}