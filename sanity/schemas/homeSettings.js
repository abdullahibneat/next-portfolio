import quote from "../types/quote"

export default {
    name: "homeSettings",
    type: "document",
    fields: [
        {
            name: "heroText",
            type: "array",
            of: [{ type: "block" }],
            validation: Rule => Rule.required()
        },
        {
            name: "skillsText",
            type: "array",
            of: [{ type: "block" }],
            validation: Rule => Rule.required()
        },
        {
            name: "testimonials",
            type: "array",
            of: [quote],
            validation: Rule => Rule.required()
        }
    ]
}