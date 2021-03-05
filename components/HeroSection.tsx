import { FunctionComponent } from "react"
import styles from "../styles/HeroSection.module.css"
import Section, { SectionProps } from "./Section"

const HeroSection: FunctionComponent<SectionProps> = ({ children, className = "" }) => {
    return <section className={`${styles.heroSection} ${className}`}>
        <Section>
            {children}
        </Section>
    </section>
}

export default HeroSection