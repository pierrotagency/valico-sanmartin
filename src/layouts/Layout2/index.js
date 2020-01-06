import React from 'react'

import styles from './index.scss'

function Layout2({
  children: areas,
  renderModule,
  moduleAdded,
  disableModuleDrag,
  library,
  className,
  Area
}) {
  return (
    <div className={className}>

      <Area
        key={1}
        index={1}
        name='area1'
        className={styles.area1}
        renderModule={renderModule}
        moduleAdded={moduleAdded}
        disableModuleDrag={disableModuleDrag}
        library={library}
      >
        {areas}
      </Area>

    </div>
  )
}

export default Layout2
