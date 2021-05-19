import { HomeProps } from "pages"
import sanityClient from "@sanityClient"
import { Project } from "types"
import { PROJECT_FIELDS } from "./projects"

export const getHomepage: () => Promise<HomeProps> = async () => {
    const home = await sanityClient.fetch(`
        *[_type == "homeSettings"][0] {
            heroSmallText,
            heroText,
            skillsText,
            testimonials,
            "skills": skills[] {
                name,
                "icon": icon.asset->url
            },
            "featuredProjects": featuredProjects[]-> {
                ${PROJECT_FIELDS}
            }
        }
    `) as HomeProps

    // Fetch latest project
    home.latestProject = await sanityClient.fetch(`
        *[_type == "project"] | order(_createdAt desc)[0] {
            ${PROJECT_FIELDS}
        }
    `) as Project

    return home
}