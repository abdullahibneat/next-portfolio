const sanityClient = require('@sanity/client')

const client = sanityClient({
  // Retrieve the projectID from the Sanity studio config file
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-06-24',
})

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  // Enable top-level await
  webpack: (config) => {
    config.experiments = { topLevelAwait: true }
    return config
  },
  env: {
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
  },
  // Redirect all /sanity/:path to the Sanity Studio web app
  rewrites: async () => {
    return [
      {
        source: '/sanity/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333*'
            : '/studio/index.html',
      },
    ]
  },
  // Get redirect routes from Sanity
  redirects: async () => {
    const redirects = await client.fetch(`
            *[_type == "redirects"] {
                source,
                destination,
                permanent
            }
        `)
    return redirects
  },
}
