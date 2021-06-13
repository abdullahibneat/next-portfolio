import Meta from "@components/Meta"
import Section from "@components/Section"
import ProjectCard from "@components/ProjectCard"
import styles from "@styles/Projects.module.css"
import { FunctionComponent, useState } from "react"
import { Project } from "types"
import { getProjects } from "services/projects"

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
        <Meta title="Projects" description="Interested in my previous work? Take a look at a collection of projects I've been involved in, ranging from personal projects to freelance work and including a variety of tools and technologies." />
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.categories}>
            {categories.map((c, i) =>
                <span key={i} onClick={() => setCategory(c)} className={currentCategory === c? styles.current : ""}>{c}</span>
            )}
        </div>
        <div className={styles.projects}>
            {projects
                .filter(p => currentCategory === "All" || p.categories.includes(currentCategory))
                .map((p, i) =>
                    <ProjectCard key={i} {...p} />
            )}
        </div>
    </Section>
}

export const getStaticProps = async () => {
    const projects = await getProjects()
    return {
        props: { projects }
    }
}

export default Projects