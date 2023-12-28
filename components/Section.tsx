import { CSSProperties } from 'react'
import styles from '@styles/Section.module.css'

export type SectionProps = {
  className?: String
  style?: CSSProperties
  children?: React.ReactNode
}

const Section = ({ children, className = '', style = {} }: SectionProps) => (
  <section className={`${styles.section} ${className}`} style={style}>
    {children}
  </section>
)

export default Section
