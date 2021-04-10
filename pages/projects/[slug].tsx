import Section from "@components/Section"
import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent } from "react"
import { Project } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"

const ProjectLayout: FunctionComponent<Project> = ({ title, body }) => {
    return <Section>
        <h1>{title}</h1>
        <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: "max" }} // TODO: Update image sizes
            {...sanityClient.config()} />
    </Section>
}

type Slug = { slug: string }
export const getStaticPaths: GetStaticPaths<Slug> = async () => {
    const paths: Slug[] = await sanityClient.fetch(`
        *[_type == "project"] {
            "slug": slug.current
        }
    `)

    return {
        paths: paths.map(p => ({ params: p })), // Path needs to be an array of { params: { slug: "slug1" }, etc... }
        fallback: false // Send 404 page for unknown slugs
    }
}

export const getStaticProps: GetStaticProps<Project> = async ({ params }) => {
    const { slug = "" } = params

    const data: Project = await sanityClient.fetch(`
        *[_type == "project" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            "categories": categories[]->name,
            "featuredImage": featuredImage.asset->url,
            github,
            live,
            summary,
            body
        }
    `, { slug })
    
    return {
        props: data
    }
}

export default ProjectLayout