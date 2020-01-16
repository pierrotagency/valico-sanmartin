import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.scss'

export const Foo = props => (
  <div className={styles.main}>
    {props.fields.title && <h3>{props.fields.title}</h3>}
    {props.fields.subtitle && <h4>{props.fields.subtitle}</h4>}
  </div>
)

Foo.propTypes = {
  fields: PropTypes.object
}

export const schemaFoo = {
  // title: 'Foo Module Form',
  // description: 'A simple form example.',
  type: 'object',
  required: ['title', 'subtitle'],
  properties: {
    title: {
      type: 'string',
      title: 'Title'
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    age: {
      type: 'integer',
      title: 'Age'
    },
    bio: {
      type: 'string',
      title: 'Bio'
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10
    }
  }
}

export const defaultsFoo = {
  title: 'Default Title Foo',
  subtitle: 'Default Subtitle Foo'
}
