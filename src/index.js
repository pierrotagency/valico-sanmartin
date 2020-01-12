import { library } from './LibraryLoader'
import { templates } from './TemplateLoader'
import { taxonomies } from './TaxonomyLoader'
import { types } from './TypeLoader'

const appName = process.env.REACT_APP_NAME
const appVersion = process.env.REACT_APP_VERSION

export { appName, appVersion, library, templates, taxonomies, types }
