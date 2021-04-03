import Section from "@components/Section"
import ProjectCard from "@components/ProjectCard"
import styles from "@styles/Projects.module.css"

const projects = [
    { title: "Lorem ipsum dolor sit amet consectetur adipisicing elit", url: "#" },
    { title: "Lorem ipsum dolor sit amet consectetur adipisicing elit", url: "#", github: "https://github.com" },
    { title: "Autem, quis natus perspiciatis vero facilis repellendus", url: "#", live: "https://abdu.io" },
    { title: "Lorem ipsum dolor sit amet consectetur adipisicing elit", url: "#", github: "https://github.com", live: "https://abdu.io" },
]

const Projects = () => <Section>
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.grid}>
        {projects.map((p, i) =>
            <ProjectCard key={i} {...p} />
        )}
    </div>
</Section>

export default Projects