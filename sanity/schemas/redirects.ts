import {defineField, defineType} from 'sanity'

export const redirects = defineType({
  name: 'redirects',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      description:
        'For advanced usage, check out https://nextjs.org/docs/api-reference/next.config.js/redirects',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom(
          (src) =>
            src?.startsWith('/') ||
            "Must be a relative path (e.g. '/path' and not 'example.com/path')",
        ),
    }),
    defineField({
      name: 'destination',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom(
          (dst) =>
            /^(https?:\/\/|\/)\w/g.test(dst || '') ||
            "Destination must be either another relative path (e.g. '/new-path') or another web address (including http(s)://).",
        ),
    }),
    defineField({
      name: 'permanent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
