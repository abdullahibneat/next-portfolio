import React from 'react'
import styles from '@styles/Browser.module.css'

type BrowserProps = {
  className?: string
  children?: React.ReactNode
}

const Browser = ({ className = '', children }: BrowserProps) => (
  <div className={`${styles.browser} ${className}`}>
    <div className={styles.browserControls}>
      <span />
      <span />
      <span />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Browser
