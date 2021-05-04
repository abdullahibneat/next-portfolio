import { FunctionComponent } from "react"
import styles from "@styles/ProjectHeader.module.css"
import { Project } from "types"
import { getImage } from "@sanityClient"

const ProjectHeader: FunctionComponent<Project> = ({ title, summary, live, github, featuredImage }) =>
    <div className={styles.container}>
        <div>
            <h1>{title}</h1>
            <p>{summary}</p>
            <div>
                {live && <a href={live} target="__blank"><button>See website →</button></a>}
                {github && <a href={github} target="__blank"><button>See source code →</button></a>}
            </div>
        </div>
        {featuredImage && <img src={getImage(featuredImage)} alt={title} />}
    </div>

export default ProjectHeader