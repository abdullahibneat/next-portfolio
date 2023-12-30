import { AppProps } from 'next/app'
import Meta from '@components/Meta'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import '@styles/global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Meta />
    <Navbar />
    <Component {...pageProps}></Component>
    <Footer />
  </>
)

export default App
