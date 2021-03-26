import "../styles/global.css"
import { AppProps } from "next/app"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const App = ({ Component, pageProps }: AppProps) => <>
    <Head>
        {/* Inter font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <Component {...pageProps}></Component>
    <Footer />
</>

export default App