export default {
    name: "contactSettings",
    type: "document",
    fields: [
        {
            name: "contactText",
            type: "text"
        },
        {
            name: "formspreeEndpoint",
            type: "url",
            validation: Rule => Rule.required()
        }
    ]
}