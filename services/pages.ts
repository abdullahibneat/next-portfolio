import { HomeProps } from "pages"
import sanityClient from "@sanityClient"

export const getHomepage: () => Promise<HomeProps> = async () => {
    const home = await sanityClient.fetch(`
        *[_type == "homeSettings"][0]
    `) as HomeProps
    return home
}