export default {
    name: "quote",
    type: "object",
    fields: [
        {
            name: "quote",
            type: "text",
            validation: Rule => Rule.required()
        },
        {
            name: "author",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        }
    ]
}