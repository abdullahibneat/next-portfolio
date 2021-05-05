import Meta from "@components/Meta"
import Section from "@components/Section"
import { GetStaticPaths, GetStaticProps } from "next"
import { FunctionComponent } from "react"
import { Project } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient, { getImage } from "@sanityClient"
import ProjectHeader from "@components/ProjectHeader"
import styles from "@styles/ProjectLayout.module.css"
import QuoteBox from "@components/QuoteBox"
import { getAllSlugs, getProjectBySlug } from "services/projects"
import ImageModal from "@components/ImageModal"

const serializers = {
    types: {
        "quote": ({ node }) => {
            const { quote, author, title } = node
            return <QuoteBox className={styles.quote} text={quote} author={author} title={title} />
        },
        "image": ({ node }) => <ImageModal image={node} width={852} height={480} alt={node.alt} />
    }
}

const ProjectLayout: FunctionComponent<Project> = project =>
    <Section>
        <Meta title={project.title} description={project.summary} path={`/projects/${project.slug}`} image={getImage(project.featuredImage)} />
        <ProjectHeader {...project} />
        <BlockContent
            className={styles.content}
            blocks={project.body}
            serializers={serializers}
            {...sanityClient.config()} />
    </Section>

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllSlugs()
    return {
        paths: paths.map(p => ({ params: p })), // Path needs to be an array of { params: { slug: "slug1" }, etc... }
        fallback: false // Send 404 page for unknown slugs
    }
}

export const getStaticProps: GetStaticProps<Project> = async ({ params }) => {
    const { slug = "" } = params

    const data: Project = await getProjectBySlug(slug as string)
    return {
        props: data
    }
}

export default ProjectLayout