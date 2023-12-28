import {defineField, defineType} from 'sanity'

export const contactSettings = defineType({
  name: 'contactSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactText',
      type: 'text',
    }),
    defineField({
      name: 'formspreeEndpoint',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
