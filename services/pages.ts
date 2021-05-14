import { HomeProps } from "pages"
import sanityClient from "@sanityClient"

export const getHomepage: () => Promise<HomeProps> = async () => {
    const home = await sanityClient.fetch(`
        *[_type == "homeSettings"][0] {
            ...,
            "skills": skills[] {
                name,
                "icon": icon.asset->url
            },
            "featuredProjects": featuredProjects[]-> {
                ...,
                "slug": slug.current,
                "categories": categories[]->name,
                "mockup": mockup.asset->url,
                "featuredImage": featuredImage.asset->url
            }
        }
    `) as HomeProps
    return home
}