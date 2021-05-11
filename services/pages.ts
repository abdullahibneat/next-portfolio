import { HomeProps } from "pages"
import sanityClient from "@sanityClient"

export const getHomepage: () => Promise<HomeProps> = async () => {
    const home = await sanityClient.fetch(`
        *[_type == "homeSettings"][0] {
            ...,
            "featuredProjects": featuredProjects[]-> {
                ...,
                "categories": categories[]->name,
                "mockup": mockup.asset->url,
                "featuredImage": featuredImage.asset->url
            }
        }
    `) as HomeProps
    return home
}