import Taxonomy1 from './taxonomies/Taxonomy1'
import Taxonomy2 from './taxonomies/Taxonomy2'

const taxonomiesArray = new Map([
  ['Taxonomy1', Taxonomy1],
  ['Taxonomy2', Taxonomy2]
])

const taxonomies = {}
taxonomiesArray.forEach((tax, key) => {
  taxonomies[key] = {
    name: tax.name,
    fieldSchema: tax.fieldSchema,
    validationSchema: tax.validationSchema
  }
})

export { taxonomies }
