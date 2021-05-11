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