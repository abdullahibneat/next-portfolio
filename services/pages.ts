import { HomeProps } from "pages"
import sanityClient from "@sanityClient"
import { Project } from "types"

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

    // Fetch latest project
    home.latestProject = await sanityClient.fetch(`
        *[_type == "project"] | order(_createdAt desc)[0] {
            ...,
            "slug": slug.current,
            "categories": categories[]->name,
            "mockup": mockup.asset->url,
            "featuredImage": featuredImage.asset->url
        }
    `) as Project

    return home
}