import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"
import { Quote } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"

const QuoteBox: FunctionComponent<Quote & { className?: string }> = ({ className = "", quote, author, title }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.quote}>
            <BlockContent
                blocks={quote}
                {...sanityClient.config()} />
        </div>
        <p className={styles.author}>{author}</p>
        {title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></div>}
    </div>

export default QuoteBox