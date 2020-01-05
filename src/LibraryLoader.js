// import ReactDynamicImport from './dynamic-import'

import { Bar, defaultsBar, schemaBar } from './modules/Bar'
import { Foo, defaultsFoo, schemaFoo } from './modules/Foo'

export const library = {
  Foo: {
    component: Foo,
    schema: schemaFoo,
    defaults: defaultsFoo
  },
  Bar: {
    component: Bar,
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
