import { CSSProperties, FunctionComponent } from "react"
import styles from "@styles/Section.module.css"

export type SectionProps = {
    className?: String,
    style?: CSSProperties
}

const Section: FunctionComponent<SectionProps> = ({ children, className = "", style = {} }) =>
    <section className={`${styles.section} ${className}`} style={style}>
        {children}
    </section>

export default Section