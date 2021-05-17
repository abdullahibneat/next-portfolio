import { FunctionComponent } from "react"
import styles from "@styles/Input.module.css"

type Props = {
    name: string,
    label: string,
    type?: "text" | "email" | "textarea",
    required?: boolean
}

const Input: FunctionComponent<Props> = ({ name, label, type = "text", required = false }) => {
    const props = {
        name, required,
        placeholder: label
    }

    return <div className={styles.container}>
        {type === "textarea" ? <textarea {...props} /> : <input type={type} {...props} />}
        <label htmlFor={name}>{label}</label>
    </div>
}

export default Input