import Meta from "@components/Meta"
import Section from "@components/Section"
import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent } from "react"
import { Project } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"
import ProjectHeader from "@components/ProjectHeader"
import styles from "@styles/ProjectLayout.module.css"
import QuoteBox from "@components/QuoteBox"
import Image from "@components/Image"

const serializers = {
    types: {
        "quote": ({ node }) => {
            const { quote, author, title } = node
            return <QuoteBox className={styles.quote} text={quote} author={author} title={title} />
        },
        "image": ({ node }) => <Image imgOptions={{ w: 600, fit: "max", q: 75 }} asset={node.asset} alt={node.alt} />
    }
}

const ProjectLayout: FunctionComponent<Project> = project =>
    <Section>
        <Meta title={project.title} description={project.summary} path={`/projects/${project.slug}`} image={project.featuredImage} />
        <ProjectHeader {...project} />
        <BlockContent
            className={styles.content}
            blocks={project.body}
            serializers={serializers}
            {...sanityClient.config()} />
    </Section>

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
            "featuredImage": featuredImage.asset->url + "?w=750&fit=max",
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