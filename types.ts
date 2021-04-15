export type Project = {
    title: string,
    slug: string,
    categories: string[],
    featuredImage?: string,
    github?: string,
    live?: string,
    summary: string,
    body: string
}

export type SanityImage = {
    _ref: string
}

/**
 * Refer to https://www.sanity.io/docs/image-urls#BhPyF4m0
 */
export type ImageOptions = { [key: string]: string | number }