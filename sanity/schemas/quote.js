export default {
    name: "quote",
    type: "object",
    fields: [
        {
            name: "quote",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "author",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "jobTitle",
            type: "string"
        }
    ]
}