import { FunctionComponent } from "react"
import { Project } from "types"
import styles from "@styles/ProjectCard.module.css"
import Link from "next/link"
import { sanityLoader } from "@sanityClient"
import Img from "next/image"

const ProjectCard: FunctionComponent<Project & { className?: string }> = ({ className = "", title, mockup, slug, github = undefined, live = undefined, summary }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.ft}>
            {mockup && <Img loader={sanityLoader} src={mockup} width={700} height={300} objectFit="contain" alt={title} />}
        </div>
        <div className={styles.content}>
            <h2>{title}</h2>
            <p>{summary}</p>
            {/* The following icons are from https://feathericons.com/ */}
            <div className={styles.links}>
                {github && <a href={github} aria-label="github source" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>}
                {live && <a href={live} aria-label="visit project" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>}
                <Link href={`/projects/${slug}`}>
                    <button>Read more ➔</button>
                </Link>
            </div>
        </div>
    </div>

export default ProjectCard