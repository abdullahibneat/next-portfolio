import { FunctionComponent } from "react"
import styles from "@styles/QuoteBox.module.css"
import { Quote } from "types"
import BlockContent from "@sanity/block-content-to-react"
import sanityClient from "@sanityClient"

// For some reason, BlockContent uses "&nbsp;" for spaces in quotes.
// This utility funciton converts them back to normal spaces.
const transformText = block => {
    return {
        ...block,
        children: block.children.map(c => ({ ...c, text: c.text.replace(/\s/g, " ") }))
    }
}

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