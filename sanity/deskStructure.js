// More info about desk structuring: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
import S from "@sanity/desk-tool/structure-builder"

// Include singleton schema types here
// This is used below to disable the creation of documents of these types
const singletons = ["siteSettings", "homeSettings", "contactSettings"]

const getSingleton = schema => S.document().schemaType(schema).documentId(schema)

export default () =>
    S.list()
        .title("Content")
        .items([
                S.listItem()
                    .title("Site Settings")
                    .child(
                        S.list()
                            .title("Site Settings")
                            .items(
                                [
                                    S.listItem()
                                        .title("General")
                                        .child(getSingleton("siteSettings").title("General settings")),

                                    S.listItem()
                                        .title("Homepage")
                                        .child(getSingleton("homeSettings").title("Homepage settings")),

                                    S.listItem()
                                        .title("Contact")
                                        .child(getSingleton("contactSettings").title("Contact page settings")),
                                ]
                            )
                    ),
                S.divider(),
                // Display all the schema types (e.g. Projects, Categories) filtering out all singletons defined above
                ...S.documentTypeListItems().filter(i => !singletons.includes(i.getId()))
        ])