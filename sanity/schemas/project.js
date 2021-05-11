import quote from "../types/quote";

export default {
    name: "project",
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
            }]
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
                quote
            ]
        }
    ],
    initialValue: {
        featured: false
    }
}