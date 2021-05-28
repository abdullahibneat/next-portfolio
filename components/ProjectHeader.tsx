import { FunctionComponent } from "react"
import styles from "@styles/ProjectHeader.module.css"
import { Project } from "types"
import { sanityLoader } from "@sanityClient"
import Img from "next/image"

const ProjectHeader: FunctionComponent<Project> = ({ title, summary, live, github, mockup }) =>
    <div className={styles.container}>
        <div>
            <h1>{title}</h1>
            <p>{summary}</p>
            <div>
                {live && <a href={live} target="_blank" rel="noopener"><button>See it in action →</button></a>}
                {github && <a href={github} target="_blank" rel="noopener"><button>See source code →</button></a>}
            </div>
        </div>
        {mockup && <div className={styles.ft}><Img loader={sanityLoader} src={mockup} width={600} height={600} alt={title} objectFit="contain" /></div>}
    </div>

export default ProjectHeader