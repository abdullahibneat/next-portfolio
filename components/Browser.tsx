import { FunctionComponent } from "react"
import styles from "@styles/Browser.module.css"

type BrowserProps = {
    className?: string
}

const Browser: FunctionComponent<BrowserProps> = ({ className = "", children }) => <div className={`${styles.browser} ${className}`}>
    <div className={styles.browserControls}>
        <span/>
        <span/>
        <span/>
    </div>
    <div className={styles.content}>
        {children}
    </div>
</div>

export default Browser