import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"

export type Quote = {
    text: string,
    author: string,
    title?: string
}

const QuoteBox: FunctionComponent<Quote & { className?: string }> = ({ className = "", text, author, title }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.quote} dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className={styles.author} dangerouslySetInnerHTML={{ __html: author }}></div>
        {title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></div>}
    </div>

export default QuoteBox