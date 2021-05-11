import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"
import { Quote } from "types"

const QuoteBox: FunctionComponent<Quote & { className?: string }> = ({ className = "", quote, author, title }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.quote} dangerouslySetInnerHTML={{ __html: quote }}></div>
        <div className={styles.author} dangerouslySetInnerHTML={{ __html: author }}></div>
        {title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></div>}
    </div>

export default QuoteBox