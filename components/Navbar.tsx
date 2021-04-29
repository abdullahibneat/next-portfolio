import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Section from "@components/Section"
import styles from "@styles/Navbar.module.css"
import Logo from "./Logo"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useRouter()

    // Close mobile navbar when a link is clicked (i.e. when URL changes)
    useEffect(() => setOpen(false), [pathname])

    return <Section className={styles.container}>
        <Link href="/"><a className={styles.logo}><Logo /></a></Link>
        {/* <div className={styles.logo}> */}
            {/* <img src="/logo.svg" width="30px" height="30px" /> */}
            {/* <svg viewBox="0 0 165 165" xmlns="http://www.w3.org/2000/svg"><path style={{fill: "white", stroke:"#000", strokeWidth: "15px", paintOrder:"stroke", }} d="M154.5,165a10.48,10.48,0,0,1-5.82-1.76L82.5,119.12,16.32,163.24A10.5,10.5,0,0,1,1.11,149.8l72-144a10.5,10.5,0,0,1,18.78,0l72,144A10.5,10.5,0,0,1,154.5,165Zm-53.07-58.5,26,17.33-13-26ZM50.57,97.83l-13,26,26-17.33ZM60,78.91l22.46,15,22.46-15L82.5,34Z"/></svg> */}
        {/* </div> */}
        <div className={`${styles.links} ${open? styles.mobile : ""}`}>
            <Link href="/"><a className={pathname === "/"? styles.currentPage : ""}>Home</a></Link>
            <Link href="/projects"><a className={pathname === "/projects"? styles.currentPage : ""}>Projects</a></Link>
            <Link href="/contact"><a className={pathname === "/contact"? styles.currentPage : ""}>Contact</a></Link>
            <div className={styles.mobileToggle}>
                <span onClick={() => setOpen(!open)}>{open? "✖" : "☰"}</span>
            </div>
        </div>
    </Section>
}

export default Navbar