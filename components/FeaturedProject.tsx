import { Project } from 'types'
import styles from '@styles/FeaturedProject.module.css'
import { sanityLoader } from '@sanityClient'
import Img from 'next/image'
import { useRouter } from 'next/router'

const FeaturedProject = ({
  title,
  categories,
  summary,
  mockup,
  slug,
}: Project) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.categories}>
        {categories.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <p>{summary}</p>
      <div>
        <button onClick={() => router.push(`projects/${slug}`)}>
          Read more
        </button>
      </div>
      {mockup && (
        <div className={styles.ft}>
          <Img
            draggable={false}
            loader={sanityLoader}
            src={mockup}
            width={300}
            height={150}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default FeaturedProject
