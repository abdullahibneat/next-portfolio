import {defineField, defineType} from 'sanity'

export const quote = defineType({
  name: 'quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
    }),
  ],
})
