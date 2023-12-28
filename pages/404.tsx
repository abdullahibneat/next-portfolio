import Meta from '@components/Meta'
import Section from '@components/Section'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()

  return (
    <Section
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Meta title="Page not found" />
      <h1>Error 404</h1>
      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem' }}>
          This page could not be found. Perhaps the content moved to another
          location.
        </p>
        <p>
          If you are sure something should have been here, please{' '}
          <Link href="/contact" style={{ color: 'var(--primary-color)' }}>
            contact me
          </Link>
          .
        </p>
      </div>
      <button onClick={() => router.push('/')}>Return to homepage</button>
    </Section>
  )
}

export default Error
