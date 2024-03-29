import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Describe yourself in 50-105 characters (this is what appears on social media/search engines)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'github',
      description: 'Your GitHub username',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((username) =>
          username?.startsWith('@') ? 'Remove the @ from the front' : true,
        ),
    }),
    defineField({
      name: 'twitter',
      description: 'Your Twitter handle',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((username) =>
          username?.startsWith('@') ? true : 'Add the @ in front',
        ),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      description: 'Image that appears when your portfolio is shared on social media.',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
