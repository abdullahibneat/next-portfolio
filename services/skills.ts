import { Skill } from "types"
import sanityClient from "@sanityClient"

export const getSkills: () => Promise<Skill[]> = async () => {
    const skills = await sanityClient.fetch(`
        *[_type == "category"] | order(_createdAt desc) {
            ...,
            "icon": icon.asset->url
        }
    `) as Skill[]
    return skills
}