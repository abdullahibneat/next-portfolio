import Section from "@components/Section"
import ProjectCard from "@components/ProjectCard"
import sanityClient from "@sanityClient"
import styles from "@styles/Projects.module.css"
import { FunctionComponent, useState } from "react"
import { Project } from "types"

type props = {
    projects: Project[]
}

const getCategories = (projects: Project[]) => {
    const categories = projects.reduce((cats, p) => {
        p.categories.forEach(c => cats.add(c))
        return cats
    }, new Set(["All"]))
    return Array.from(categories)
}

const Projects: FunctionComponent<props> = ({ projects }) => {
    const [categories] = useState(getCategories(projects))
    const [currentCategory, setCategory] = useState("All")

    return <Section>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.categories}>
            {categories.map((c, i) =>
                <span key={i} onClick={() => setCategory(c)} className={currentCategory === c? styles.current : ""}>{c}</span>
            )}
        </div>
        <div className={styles.grid}>
            {projects
                .filter(p => currentCategory === "All" || p.categories.includes(currentCategory))
                .map((p, i) =>
                    <ProjectCard key={i} url={`/projects/${p.slug}`} {...p} />
            )}
        </div>
    </Section>
}

export const getStaticProps = async () => {
    const projects = await sanityClient.fetch(`
        *[_type == "project"] {
            title,
            "slug": slug.current,
            "featuredImage": featuredImage.asset->url,
            github,
            live,
            "categories": categories[]->name
        }
    `)
    return {
        props: { projects }
    }
}

export default Projects