import Input from "@components/Input"
import Meta from "@components/Meta"
import Section from "@components/Section"
import styles from "@styles/Contact.module.css"
import useModal from "hooks/useModal"
import { useState, FormEventHandler } from "react"

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const { Modal, show } = useModal()

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault()
        setLoading(true)

        // Get the form element
        const form = e.target as HTMLFormElement

        const req = {
            method: "POST",
            body: new FormData(form)
        }

        // Send form data using FormSpree
        fetch(process.env.NEXT_PUBLIC_FORMSPREE, req)
            .then(() => { setSent(true); form.reset() })
            .catch(() => setError(true))
            .finally(() => show())
    }

    return <Section>
        <Meta title="Contact" path="/contact" description="Do you have a project in mind? Or need help in your company? If so, feel free to contact me with your query and I will get in touch as soon as possible." />
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.text}>Do you have a project in mind? Or need help in your company? If so, feel free to contact me.</p>
        <form className={`${styles.form} ${loading? styles.loading : ""}`} onSubmit={handleSubmit}>
            <Input name="name" label="Name" />
            <Input name="email" label="Email" type="email" />
            <Input name="message" label="Message" type="textarea" />
            <button>Submit</button>
        </form>
        <Modal>
            {sent && <p>Your message was sent successfully.</p>}
            {error && <p>Unfortunately an error occurred.</p>}
        </Modal>
    </Section>
}

export default Contact