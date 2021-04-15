import sanityClient from "@sanity/client"
const sanityJSON = require("./sanity/sanity.json")

export const getImage = (asset, params = "") => {
    // A Sanity image asset obj looks like: { _ref: "image-[dash-separated-file-name]-[dimensions]-[ext]" }
    // To convert to a link, this "_ref" needs to be converted to: [dash-separated-file-name]-[dimensions].ext
    // i.e. remove "image-" from beginning, and replace the last dash ("-[ext]") with a dot (".[ext]")
    const ref = asset._ref

    // Get the extension in the form ".[ext]"
    const lastDash = ref.lastIndexOf("-") + 1
    const fileExt = "." + ref.substr(lastDash)

    // Remove the leading "image-", replace "-[ext]" with ".[ext]"
    const fileName = ref.substr(6, ref.length - 6 - fileExt.length) + fileExt
    return `https://cdn.sanity.io/images/${sanityJSON.api.projectId}/production/${fileName}?${params}`
}

export default sanityClient({
    // Retrieve the projectID from the Sanity studio config file
    projectId: sanityJSON.api.projectId,
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-04-10"
})