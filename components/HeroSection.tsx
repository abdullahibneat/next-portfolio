import styles from '@styles/HeroSection.module.css'
import { SectionProps } from '@components/Section'

const HeroSection = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`${styles.heroSection} ${className}`}>
      {children}
    </section>
  )
}

export default HeroSection
