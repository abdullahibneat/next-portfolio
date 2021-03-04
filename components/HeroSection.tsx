import { FunctionComponent } from "react"
import styles from "../styles/HeroSection.module.css"
import Section from "./Section"

const HeroSection: FunctionComponent = ({ children }) => {
    return <section className={styles.heroSection}>
        <Section>
            {children}
        </Section>
    </section>
}

export default HeroSection