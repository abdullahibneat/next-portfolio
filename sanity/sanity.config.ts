import {defineConfig} from 'sanity'
import {StructureResolver, deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {generateOGImage} from '@catherineriver/sanity-plugin-generate-ogimage'

const deskStructure: StructureResolver = (S) => {
  // Include singleton schema types here
  // This is used below to disable the creation of documents of these types
  const singletons: Array<string | undefined> = ['siteSettings', 'homeSettings', 'contactSettings']

  const getSingleton = (schema: string) => S.document().schemaType(schema).documentId(schema)

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General')
                .child(getSingleton('siteSettings').title('General settings')),

              S.listItem()
                .title('Homepage')
                .child(getSingleton('homeSettings').title('Homepage settings')),

              S.listItem()
                .title('Contact')
                .child(getSingleton('contactSettings').title('Contact page settings')),
            ]),
        ),
      S.divider(),
      // Display all the schema types (e.g. Projects, Categories) filtering out all singletons defined above
      ...S.documentTypeListItems().filter((i) => !singletons.includes(i.getId())),
    ])
}

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [deskTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
