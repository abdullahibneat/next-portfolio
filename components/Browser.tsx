import { FunctionComponent } from "react"
import styles from "@styles/Browser.module.css"

type BrowserProps = {
    className?: string
}

const Browser: FunctionComponent<BrowserProps> = ({ className = "", children }) => <div className={`${styles.browser} ${className}`}>
    <div className={styles.browserControls}>
        <span style={{ backgroundColor: "red" }} />
        <span style={{ backgroundColor: "orange" }} />
        <span style={{ backgroundColor: "green" }} />
    </div>
    <div className={styles.content}>
        {children}
    </div>
</div>

export default Browser