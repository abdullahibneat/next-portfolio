import { FunctionComponent } from "react"
import Head from "next/head"
import defaultConfig from "config"

type Props = {
    title?: string,
    description?: string,
    path?: string,
    image?: string
}

const makeTitle = (title?: string) => {
    if(!title) return defaultConfig.name
    return title + " | " + defaultConfig.name
}

const Meta: FunctionComponent<Props> = ({ title, description = defaultConfig.description, path = "/", image = defaultConfig.defaultImage }) => <Head>
    {/* Default meta tags */}
    <title>{makeTitle(title)}</title>
    <meta name="description" content={description} />

    {/* Open Graph */}
    <meta property="og:url" content={defaultConfig.url + path} key="ogurl" />
    <meta property="og:title" content={makeTitle(title)} key="ogtitle" />
    <meta property="og:description" content={description} key="ogdesc" />
    <meta property="og:image" content={image} key="ogimage" />
    <meta property="og:site_name" content={defaultConfig.name} key="ogsitename" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={defaultConfig.twitter} />
</Head>

export default Meta