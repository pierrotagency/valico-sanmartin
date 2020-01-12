import { Bar, defaultsBar, schemaBar } from './library/Bar'
import { Foo, defaultsFoo, schemaFoo } from './library/Foo'

const library = {
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

export { library }
