import { HomeProps } from "pages"
import sanityClient from "@sanityClient"
import { PROJECT_FIELDS } from "./projects"

export const getHomepage: () => Promise<HomeProps> = async () => {
    const home = await sanityClient.fetch(`
    {
        // Get fields from "homeSettings"
        ...*[_type == "homeSettings"][0] {
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
        },

        // Retrieve the latest project
        "latestProject": *[_type == "project"] | order(_createdAt desc)[0] {
            ${PROJECT_FIELDS}
        },

        // Get GitHub username
        "github": *[_type == "siteSettings"][0].github
    }
    `) as HomeProps

    return home
}