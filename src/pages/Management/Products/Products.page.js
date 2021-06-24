import TableGrid from './Component/TableGrid/TableGrid.component'
import Toolbar from '@material-ui/core/Toolbar';

import React from 'react'

function Products() {
  return (
    <div style={{ width: '100%' }}>
      {/* <Toolbar/> */}
      <TableGrid data={'importData'} />
    </div >
  )
}

export { Products }
