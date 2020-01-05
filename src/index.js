import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

import Layout1 from './layouts/Layout1'

import { library } from './LibraryLoader'

class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}

export { ExampleComponent, Layout1, library }
