import { FunctionComponent } from "react"
import styles from "../styles/Browser.module.css"

const Browser: FunctionComponent = ({ children }) => <div className={styles.browser}>
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