import { AppProps } from "next/app"
import Head from "next/head"
import Meta from "@components/Meta"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import "@styles/global.css"

const App = ({ Component, pageProps }: AppProps) => <>
    <Head>
        {/* Inter font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Meta />
    <Navbar />
    <Component {...pageProps}></Component>
    <Footer />
</>

export default App