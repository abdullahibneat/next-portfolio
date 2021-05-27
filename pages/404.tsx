import Meta from "@components/Meta"
import Section from "@components/Section"
import Link from "next/link"

const Error = () =>
    <Section style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Meta title="Page not found" />
        <h1>Error 404</h1>
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <p style={{ marginBottom: "1rem" }}>This page could not be found. Perhaps the content moved to another location.</p>
            <p>If you are sure something should have been here, please <Link href="/contact"><a style={{ color: "var(--primary-color)" }}>contact me</a></Link>.</p>
        </div>
        <Link href="/"><button>Return to homepage</button></Link>
    </Section>

export default Error