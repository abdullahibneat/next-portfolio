import sanityClient from "@sanityClient"
import { Project } from "types"

type GetterOptions = {
    featured?: boolean
}

export const getProjects: (options?: GetterOptions) => Promise<Project[]> = async (options = { featured: false }) => {
    const projects = await sanityClient.fetch(`
        *[_type == "project" ${options.featured? "&& featured" : ""}] | order(_createdAt desc) {
            ...,
            "slug": slug.current,
            "categories": categories[]->name
        }
    `) as Project[]
    return projects
}

export const getProjectBySlug: (slug: string) => Promise<Project> = async slug => {
    const project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            "categories": categories[]->name
        }
    `, { slug }) as Project
    return project
}

type Slug = { slug: string }

export const getAllSlugs: () => Promise<Slug[]> = async () => {
    const slugs = await sanityClient.fetch(`
        *[_type == "project"] {
            "slug": slug.current
        }
    `) as Slug[]
    return slugs
}