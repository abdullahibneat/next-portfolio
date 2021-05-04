import { FunctionComponent } from "react"
import styles from "@styles/ProjectHeader.module.css"
import { Project } from "types"
import { sanityLoader } from "@sanityClient"
import Img from "next/image"

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
        {featuredImage && <div className={styles.ft}><Img loader={sanityLoader} src={featuredImage} width={600} height={600} alt={title} objectFit="contain" /></div>}
    </div>

export default ProjectHeader