import { SiteSettings } from "types"
import sanityClient from "@sanityClient"

export const getSettings: () => Promise<SiteSettings> = async () => {
    const settings = await sanityClient.fetch(`
        *[_type == "siteSettings"][0] {
            ...,
            "image": image.asset->url
        }
    `) as SiteSettings
    return settings
}