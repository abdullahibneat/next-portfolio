import sanityClient from "@sanity/client"
const sanityJSON = require("./sanity/sanity.json")

export default sanityClient({
    // Retrieve the projectID from the Sanity studio config file
    projectId: sanityJSON.api.projectId,
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-04-10"
})