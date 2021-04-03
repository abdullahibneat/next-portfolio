import { FunctionComponent } from "react"
import styles from "@styles/Section.module.css"

export type SectionProps = {
    className?: String
}

const Section: FunctionComponent<SectionProps> = ({ children, className = "" }) =>
    <section className={`${styles.section} ${className}`}>
        {children}
    </section>

export default Section