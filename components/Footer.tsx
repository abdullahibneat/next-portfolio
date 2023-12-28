import {} from 'react'
import Section from '@components/Section'
import styles from '@styles/Footer.module.css'
import { getSettings } from 'services/settings'
import { getContact } from 'services/pages'
import { useRouter } from 'next/router'
import Link from 'next/link'

const { github, name } = await getSettings()
const { contactText } = await getContact()

const Footer = () => {
  const router = useRouter()

  return (
    <>
      <Section className={styles.contact}>
        <h2>💬 Get in touch</h2>
        <div>
          <p>{contactText}</p>
          <div>
            <button onClick={() => router.push('/contact')}>
              Let's talk ➔
            </button>
          </div>
        </div>
      </Section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {name}</p>
          <div>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>{' '}
            <span>•</span> <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
