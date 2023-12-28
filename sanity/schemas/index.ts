import {SchemaTypeDefinition} from 'sanity'
import {category} from './category'
import {contactSettings} from './contactSettings'
import {homeSettings} from './homeSettings'
import {project} from './project'
import {quote} from './quote'
import {redirects} from './redirects'
import {siteSettings} from './siteSettings'
import {youtube} from './youtube'

export const schemaTypes: SchemaTypeDefinition[] = [
  category,
  contactSettings,
  homeSettings,
  project,
  quote,
  redirects,
  siteSettings,
  youtube,
]
