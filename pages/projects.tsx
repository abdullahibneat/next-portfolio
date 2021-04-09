import Section from "@components/Section"
import ProjectCard from "@components/ProjectCard"
import sanityClient from "../sanityClient"
import styles from "@styles/Projects.module.css"
import { FunctionComponent } from "react"
import { Project } from "types"

type props = {
    projects: Project[]
}

const Projects: FunctionComponent<props> = ({ projects }) => <Section>
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.grid}>
        {projects.map((p, i) =>
            <ProjectCard key={i} url={`/projects/${p.slug}`} {...p} />
        )}
    </div>
</Section>

export const getStaticProps = async () => {
    const projects = await sanityClient.fetch(`
        *[_type == "project"] {
            title,
            "slug": slug.current,
            "featuredImage": featuredImage.asset->url,
            github,
            live
        }
    `)
    return {
        props: { projects }
    }
}

export default Projects