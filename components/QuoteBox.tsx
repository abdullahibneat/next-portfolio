import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"
import { Quote } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"
import { transformText } from "utils"

const QuoteBox: FunctionComponent<Quote & { className?: string }> = ({ className = "", quote, author, jobTitle }) =>
    <div className={`${styles.container} ${className}`}>
        <div className={styles.quote}>
            <BlockContent
                blocks={quote.map(q => transformText(q))}
                {...sanityClient.config()} />
        </div>
        <p className={styles.author}>{author}</p>
        {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}
    </div>

export default QuoteBox