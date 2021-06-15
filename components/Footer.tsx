import { FunctionComponent } from "react"
import Section from "@components/Section"
import Link from "next/link"
import styles from "@styles/Footer.module.css"
import { getSettings } from "services/settings"
import { getContact } from "services/pages"

const { github, name } = await getSettings()
const { contactText } = await getContact()

const Footer: FunctionComponent = () => <>
    <Section className={styles.contact}>
        <h2>💬 Get in touch</h2>
        <div>
            <p>{contactText}</p>
            <div>
                <Link href="/contact"><button>Let's talk ➔</button></Link>
            </div>
        </div>
    </Section>
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p>&copy; {name}</p>
            <div>
                <a href={`https://github.com/${github}`} target="_blank" rel="noopener">GitHub</a> <span>•</span> <Link href="/contact">Contact</Link>
            </div>
        </div>
    </footer>
</>

export default Footer