import React from 'react'
// import Area from '../../components/Area'

import styles from './index.scss'

function Layout1({
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

      <Area
        key={2}
        index={2}
        name='area2'
        className={styles.area2}
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

export default Layout1
