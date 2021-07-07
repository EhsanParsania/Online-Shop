import TableGrid from './Component/TableGrid/TableGrid.component'

import React from 'react'

function Orders() {
  return (
    <div style={{ width: '100%' }}>
      {/* <Toolbar/> */}
      <TableGrid data={'importData'} />
    </div >
  )
}

export { Orders }
