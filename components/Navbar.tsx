import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Section from '@components/Section'
import styles from '@styles/Navbar.module.css'
import { getSettings } from 'services/settings'

// Retrieve logo from site settings
const settings = await getSettings()
const logo = settings.logo

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { pathname, ...router } = useRouter()

  // Close mobile navbar when a link is clicked (i.e. when URL changes)
  useEffect(() => setOpen(false), [pathname])

  return (
    <Section className={styles.container}>
      <img
        className={styles.logo}
        src={logo}
        alt=""
        onClick={() => router.push('/')}
      />
      <div className={`${styles.links} ${open ? styles.mobile : ''}`}>
        <Link href="/" className={pathname === '/' ? styles.currentPage : ''}>
          Home
        </Link>
        <Link
          href="/projects"
          className={pathname === '/projects' ? styles.currentPage : ''}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={pathname === '/contact' ? styles.currentPage : ''}
        >
          Contact
        </Link>
        <div className={styles.mobileToggle}>
          <span onClick={() => setOpen(!open)}>{open ? '✖' : '☰'}</span>
        </div>
      </div>
    </Section>
  )
}

export default Navbar
