import { FunctionComponent } from "react"
import Section from "@components/Section"
import Link from "next/link"
import styles from "@styles/Footer.module.css"
import { getSettings } from "services/settings"

const { github } = await getSettings()

const Footer: FunctionComponent = () => <>
    <Section className={styles.contact}>
        <h2>💬 Get in touch</h2>
        <div>
            <p>Do you have a project in mind? Or need help in your company? If so, feel free to contact me.</p>
            <div>
                <Link href="/contact"><button>Let's talk ➔</button></Link>
            </div>
        </div>
    </Section>
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p>&copy; Abdullah Ibne Atiq</p>
            <div>
                <a href={`https://github.com/${github}`} target="_blank">GitHub</a> <span>•</span> <Link href="/contact">Contact</Link>
            </div>
        </div>
    </footer>
</>

export default Footer