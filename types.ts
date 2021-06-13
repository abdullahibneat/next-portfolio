export type Project = {
    title: string,
    slug: string,
    categories: string[],
    mockup?: string,
    featuredImage?: string,
    github?: string,
    live?: string,
    summary: string,
    body: any
}

export type Skill = {
    name: string,
    icon: string
}

export type Quote = {
    quote: any,
    author: string,
    jobTitle?: string
}

export type SiteSettings = {
    url: string,
    name: string,
    description: string,
    github: string,
    twitter: string,
    logo: string,
    image: string
}