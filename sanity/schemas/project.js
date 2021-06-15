import React from "react"
import { MediaEditor } from "sanity-plugin-asset-source-ogimage"
import OGImage from "../OGImage"

export default {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                // Automatically generate slug from title
                source: "title",
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, "-") // Replace spaces with dashes
            }
        },
        {
            name: "categories",
            type: "array",
            validation: Rule => Rule.required(),
            of: [{
                type: "reference",
                to: [{
                    type: "category"
                }]
            }]
        },
        {
            name: "mockup",
            type: "image",
            fields: [{
                name: "alt",
                type: "string"
            }]
        },
        {
            name: "featuredImage",
            title: "Featured image",
            type: "image",
            fields: [{
                name: "alt",
                type: "string"
            }],
            options: {
                sources: [
                    {
                        name: "generate-ogimage",
                        title: "Generate OG Image",
                        component: props => <MediaEditor
                                {...props}
                                layouts={[ OGImage ]}
                            />
                    }
                ]
            }
        },
        {
            name: "github",
            type: "url"
        },
        {
            name: "live",
            type: "url"
        },
        {
            name: "summary",
            type: "text",
            validation: Rule => Rule.required()
        },
        {
            name: "body",
            type: "array",
            validation: Rule => Rule.required(),
            of: [
                {
                    type: "block"
                },
                {
                    type: "image",
                    fields: [{
                        name: "alt",
                        title: "Alt text",
                        type: "string",
                        options: {
                            isHighlighted: true
                        }
                    }]
                },
                {
                    type: "quote"
                },
                {
                    type: "youtube"
                }
            ]
        }
    ]
}