import sanityClient from "@sanity/client"
import { ImageOptions, SanityImage } from "types"
import sanityJSON from "./sanity/sanity.json"

/**
 * A utility funciton to convert a Sanity image asset to a direct URL to the image.
 * 
 * @param img A Sanity image asset
 * @param params Optional parameters, refer to: https://www.sanity.io/docs/image-urls#BhPyF4m0
 * @returns Image URL
 */
export const getImage = (img: SanityImage, params: ImageOptions = {}) => {
    // A Sanity image asset obj looks like: { _ref: "image-[dash-separated-file-name]-[dimensions]-[ext]" }
    // To convert to a link, this "_ref" needs to be converted to: [dash-separated-file-name]-[dimensions].ext
    // i.e. remove "image-" from beginning, and replace the last dash ("-[ext]") with a dot (".[ext]")
    const ref = img.asset._ref

    // Get the extension in the form ".[ext]"
    const lastDash = ref.lastIndexOf("-") + 1
    const fileExt = "." + ref.substr(lastDash)

    // Remove the leading "image-", replace "-[ext]" with ".[ext]"
    const fileName = ref.substr(6, ref.length - 6 - fileExt.length) + fileExt

    // Construct a query string for the image options
    const query = Object.keys(params).map(k => `${k}=${params[k]}`).join("&")

    return `https://cdn.sanity.io/images/${sanityJSON.api.projectId}/production/${fileName}?${query}`
}

export default sanityClient({
    // Retrieve the projectID from the Sanity studio config file
    projectId: sanityJSON.api.projectId,
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-04-10"
})