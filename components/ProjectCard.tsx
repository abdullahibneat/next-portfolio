import Link from "next/link"
import { FunctionComponent } from "react"
import styles from "../styles/ProjectCard.module.css"

export type ProjectCardProps = {
    title: string,
    featuredImage?: string,
    url: string,
    github?: string,
    live?: string
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ title, featuredImage = `https://source.unsplash.com/random/500x500?nature&random=${Math.random() * 50}`, url, github = undefined, live = undefined }) =>
    <Link href={url}>
        <a className={styles.card} style={{ backgroundImage: `url(${featuredImage})` }}>
            <div className={styles.content}>
                <h2><span>{title}</span></h2>
                <div className={styles.links}>
                    {github && <Link href={github}><a title="View source on GitHub" style={{ backgroundColor: "red" }} /></Link>}
                    {live && <Link href={live}><a title="Visit this project" style={{ backgroundColor: "blue" }} /></Link>}
                </div>
            </div>
        </a>
    </Link>

export default ProjectCard