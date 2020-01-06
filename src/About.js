import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

class AboutComponent extends Component {
  static propTypes = {
    coreVersion: PropTypes.string,
    coreName: PropTypes.string
  }

  render() {
    const {
      coreName,
      coreVersion
    } = this.props

    return (
      <div className={styles.about}>
        {process.env.REACT_APP_NAME}@{process.env.REACT_APP_VERSION} - {coreName}@{coreVersion}
      </div>
    )
  }
}

export { AboutComponent }
