import { FunctionComponent } from "react"
import Section from "./Section"
import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer: FunctionComponent = () => <>
    <Section className={styles.contact}>
        <h2>💬 Get in touch</h2>
        <p>Do you have a project in mind? Or need help in your company? If so, feel free to contact me.</p>
        <Link href="#"><button>Let's talk →</button></Link>
    </Section>
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p>&copy; Abdullah Ibne Atiq</p>
            <div>
                <Link href="#">GitHub</Link> <span>•</span> <Link href="#">Contact</Link>
            </div>
        </div>
    </footer>
</>

export default Footer