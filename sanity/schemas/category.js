export default {
    name: "category",
    title: "Categories",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "icon",
            type: "image",
            options: {
                accept: "image/svg+xml"
            },
            validation: Rule => Rule.required()
        }
    ]
}