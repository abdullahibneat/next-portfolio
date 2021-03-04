import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useRouter()

    return <nav>
        <div className={styles.container}>
            <div className={styles.logo}>LOGO</div>
            <div className={`${styles.links} ${open? styles.mobile : ""}`}>
                <Link href="/"><a className={pathname === "/"? styles.currentPage : ""}>Home</a></Link>
                <Link href="/projects"><a className={pathname === "projects"? styles.currentPage : ""}>Projects</a></Link>
                <Link href="/contact"><a className={pathname === "contact"? styles.currentPage : ""}>Contact</a></Link>
                <div className={styles.mobileToggle}>
                    <span onClick={() => setOpen(!open)}>{open? "✖" : "☰"}</span>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar