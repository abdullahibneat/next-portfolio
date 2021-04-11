import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"

export type Quote = {
    text: string,
    author: string
}

const QuoteBox: FunctionComponent<Quote & { className?: string }> = ({ className = "", text, author }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.quote} dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className={styles.author} dangerouslySetInnerHTML={{ __html: author }}></div>
    </div>

export default QuoteBox