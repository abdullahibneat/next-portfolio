import {defineField, defineType} from 'sanity'

export const homeSettings = defineType({
  name: 'homeSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSmallText',
      type: 'string',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Introduction',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredProjects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'skillsText',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skills',
      description:
        'A couple of SVG logo repositories: https://svgporn.com/, https://vectorlogo.zone/',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              type: 'image',
              options: {
                accept: 'image/svg+xml',
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      of: [{type: 'quote'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
