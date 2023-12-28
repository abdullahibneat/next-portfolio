import {defineField, defineType} from 'sanity'
import {BuildEditorAssetSource} from 'sanity-plugin-asset-source-ogimage'
import {OGImage} from '../components'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        // Automatically generate slug from title
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'), // Replace spaces with dashes
      },
    }),
    defineField({
      name: 'categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mockup',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
      options: {
        sources: [
          // BuildEditorAssetSource({layouts: [OGImage]}),
          {
            name: 'generate-ogimage',
            title: 'Generate OG Image',
            // @ts-ignore
            component: BuildEditorAssetSource({layouts: [OGImage]}),
          },
        ],
      },
    }),
    defineField({
      name: 'github',
      type: 'url',
    }),
    defineField({
      name: 'live',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          type: 'quote',
        },
        {
          type: 'youtube',
        },
      ],
    }),
  ],
})
