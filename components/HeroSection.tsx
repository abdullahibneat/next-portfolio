import { FunctionComponent } from "react"
import styles from "@styles/HeroSection.module.css"
import { SectionProps } from "@components/Section"

const HeroSection: FunctionComponent<SectionProps> = ({ children, className = "" }) => {
    return <section className={`${styles.heroSection} ${className}`}>
        {children}
    </section>
}

export default HeroSection