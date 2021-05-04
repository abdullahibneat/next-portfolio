import sanityClient from "@sanityClient"
import { Project } from "types"

export const getProjects: () => Promise<Project[]> = async () => {
    const projects = await sanityClient.fetch(`
        *[_type == "project"] | order(_createdAt desc) {
            "slug": slug.current,
            ...
        }
    `) as Project[]
    return projects
}

export const getProject: (slug: string) => Promise<Project> = async slug => {
    const project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0] {
            "slug": slug.current,
            ...
        }
    `, { slug })
    return project
}