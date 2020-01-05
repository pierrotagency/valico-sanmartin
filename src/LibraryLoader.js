// import ReactDynamicImport from './dynamic-import'

import { componentBar, defaultsBar, schemaBar } from './modules/Bar'
import { componentFoo, defaultsFoo, schemaFoo } from './modules/Foo'

export const library = {
  Foo: {
    component: componentFoo,
    schema: schemaFoo,
    defaults: defaultsFoo
  },
  Bar: {
    component: componentBar,
    schema: schemaBar,
    defaults: defaultsBar
  }
}

// const ComponentLoader = f => import(`./modules/${f}/index.js`)

// export const library = libraryDefinition.reduce((p, c) => {
//   return {
//     ...p,
//     [c.name]: ReactDynamicImport({
//       name: c.name,
//       loader: ComponentLoader
//     })
//   }
// }, {})
