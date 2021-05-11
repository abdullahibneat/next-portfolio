export default {
    name: "category",
    title: "Categories",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            validation: Rule => Rule.required()
        }
    ]
}