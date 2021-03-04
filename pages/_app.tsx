import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps}></Component>

export default App