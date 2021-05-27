import Link from "next/link"
import { FunctionComponent } from "react"
import { Project } from "types"
import styles from "@styles/FeaturedProject.module.css"
import { sanityLoader } from "@sanityClient"
import Img from "next/image"

const FeaturedProject: FunctionComponent<Project> = ({ title, categories, summary, mockup, slug }) =>
    <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.categories}>
            {categories.map((c, i) => <span key={i}>{c}</span>)}
        </div>
        <p>{summary}</p>
        <div>
            <Link href={`projects/${slug}`}><button>Read more</button></Link>
        </div>
        {mockup && <div className={styles.ft}><Img draggable={false} loader={sanityLoader} src={mockup} width={300} height={150} alt={title} objectFit="contain" /></div>}
    </div>

export default FeaturedProject