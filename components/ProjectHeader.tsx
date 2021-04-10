import { FunctionComponent } from "react"
import styles from "@styles/ProjectHeader.module.css"

type props = {
    title: string,
    summary: string,
    live?: string,
    github?: string,
    featuredImage?: string
}

const ProjectHeader: FunctionComponent<props> = ({ title, summary, live, github, featuredImage }) =>
    <div className={styles.container}>
        <div>
            <h1>{title}</h1>
            <p>{summary}</p>
            <div>
                {live && <a href={live} target="__blank"><button>See website →</button></a>}
                {github && <a href={github} target="__blank"><button>See source code →</button></a>}
            </div>
        </div>
        {featuredImage && <img src={featuredImage} alt={title} />}
    </div>

export default ProjectHeader