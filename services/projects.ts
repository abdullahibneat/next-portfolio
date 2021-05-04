import sanityClient from "@sanityClient"
import { Project } from "types"

type GetterOptions = {
    featured?: boolean
}

export const getProjects: (options?: GetterOptions) => Promise<Project[]> = async ({ featured = false }) => {
    const projects = await sanityClient.fetch(`
        *[_type == "project" ${featured? "&& featured" : ""}] | order(_createdAt desc) {
            ...,
            "slug": slug.current,
            "categories": categories[]->name
        }
    `) as Project[]
    return projects
}

export const getProject: (slug: string) => Promise<Project> = async slug => {
    const project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            "categories": categories[]->name
        }
    `, { slug })
    return project
}