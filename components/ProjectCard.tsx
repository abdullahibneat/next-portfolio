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
    <div className={styles.wrapper}>
        <Link href={url}>
            <a className={styles.card} style={{ backgroundImage: `url(${featuredImage})` }}>
                <div className={styles.content}>
                    <h2><span>{title}</span></h2>
                </div>
            </a>
        </Link>
        {/* The following icons are from https://feathericons.com/ */}
        <div className={styles.links}>
            {github && <Link href={github}>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
            </Link>}
            {live && <Link href={live}>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>
            </Link>}
        </div>
    </div>

export default ProjectCard