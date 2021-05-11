export default {
    name: "siteSettings",
    type: "document",
    fields: [
        {
            name: "url",
            description: "Address where the frontend is deployed.",
            type: "url",
            validation: Rule => Rule
                .required()
                .uri({ allowRelative: false })
                .custom(url => url.endsWith("/")? "Please remove trailing slash" : true)
        },
        {
            name: "name",
            title: "Full name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "description",
            description: "Describe yourself in 50-105 characters (this is what appears on social media/search engines)",
            type: "text",
            validation: Rule => Rule.required()
        },
        {
            name: "github",
            description: "Your GitHub username",
            type: "string",
            validation: Rule => Rule
                .required()
                .custom(username => username.startsWith("@") ? "Remove the @ from the front" : true)
        },
        {
            name: "twitter",
            description: "Your Twitter handle",
            type: "string",
            validation: Rule => Rule
                .required()
                .custom(username => username.startsWith("@") ? true : "Add the @ in front")
        },
        {
            name: "defaultImage",
            description: "Image that appears when your portfolio is shared on social media.",
            type: "image",
            validation: Rule => Rule.required()
        }
    ]
}