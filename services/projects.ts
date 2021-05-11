import sanityClient from "@sanityClient"
import { Project } from "types"

export const getProjects: () => Promise<Project[]> = async () => {
    const projects = await sanityClient.fetch(`
        *[_type == "project"] | order(_createdAt desc) {
            ...,
            "slug": slug.current,
            "categories": categories[]->name,
            "mockup": mockup.asset->url,
            "featuredImage": featuredImage.asset->url
        }
    `) as Project[]
    return projects
}

export const getProjectBySlug: (slug: string) => Promise<Project> = async slug => {
    const project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0] {
            ...,
            "slug": slug.current,
            "categories": categories[]->name,
            "mockup": mockup.asset->url,
            "featuredImage": featuredImage.asset->url
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