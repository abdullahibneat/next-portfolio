export type Project = {
    title: string,
    slug: string,
    categories: string[],
    featuredImage?: SanityImage,
    github?: string,
    live?: string,
    summary: string,
    body: any
}

export type SanityImage = {
    _type: string,
    alt?: string,
    asset: {
        _type: string,
        _ref: string
    }
}

/**
 * Refer to https://www.sanity.io/docs/image-urls#BhPyF4m0
 */
export type ImageOptions = { [key: string]: string | number }