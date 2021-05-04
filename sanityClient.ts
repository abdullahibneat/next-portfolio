import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
import sanityJSON from "./sanity/sanity.json"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageLoader } from "next/image"

const client = sanityClient({
    // Retrieve the projectID from the Sanity studio config file
    projectId: sanityJSON.api.projectId,
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-04-10"
})

const builder = imageUrlBuilder(client)

export const sanityLoader: ImageLoader = ({ src, width, quality }) => {
    return builder.image(src).fit("max").width(width).quality(quality).url()
}

export const getImage = (src: SanityImageSource) => builder.image(src).url()

export default client