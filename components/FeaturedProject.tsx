import Link from "next/link"
import { FunctionComponent } from "react"
import { Project } from "types"
import styles from "@styles/FeaturedProject.module.css"

const FeaturedProject: FunctionComponent<Project> = ({ title, categories, summary, featuredImage, slug }) =>
    <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.categories}>
            {categories.map((c, i) => <span key={i}>{c}</span>)}
        </div>
        <p>{summary}</p>
        <div>
            <Link href={`projects/${slug}`}><button>Read more</button></Link>
        </div>
        {featuredImage && <img draggable={false} src={featuredImage} alt={title} />}
    </div>

export default FeaturedProject