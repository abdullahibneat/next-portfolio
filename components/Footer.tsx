import { FunctionComponent } from "react"
import styles from "../styles/Footer.module.css"

const Footer: FunctionComponent = () => <footer className={styles.footer}>
    <div className={styles.container}>
        <p>&copy; Abdullah Ibne Atiq</p>
        <div className={styles.footerLinks}>
            <a className={styles.link} href="#">GitHub</a> <span>•</span> <a className={styles.link} href="#">Contact</a>
        </div>
    </div>
</footer>

export default Footer