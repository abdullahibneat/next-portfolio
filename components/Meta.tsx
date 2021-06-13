import { FunctionComponent } from "react"
import Head from "next/head"
import { getSettings } from "services/settings"

const defaultConfig = await getSettings()

type Props = {
    title?: string,
    description?: string,
    image?: string
}

const makeTitle = (title?: string) => {
    if(!title) return defaultConfig.name
    return title + " | " + defaultConfig.name
}

const Meta: FunctionComponent<Props> = ({ title, description = defaultConfig.description, image = defaultConfig.image }) => <Head>
    {/* Default meta tags */}
    <title>{makeTitle(title)}</title>
    <meta name="description" content={description} />
    {/* Use svg logo as favicon, fallback to .ico if svg not supported */}
    <link rel="icon" type="image/svg+xml" href={defaultConfig.logo} />
    <link rel="alternate icon" href="/favicon.ico" />

    {/* Open Graph */}
    <meta property="og:title" content={makeTitle(title)} key="ogtitle" />
    <meta property="og:description" content={description} key="ogdesc" />
    <meta property="og:image" content={image} key="ogimage" />
    <meta property="og:site_name" content={defaultConfig.name} key="ogsitename" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={defaultConfig.twitter} />
</Head>

export default Meta