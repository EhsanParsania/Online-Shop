import TableGrid from '../Quantity/components/TableGrid/TableGrid.component'
import Toolbar from '@material-ui/core/Toolbar';

import React from 'react'

function Quantity() {
  return (
    <div style={{width:'100%'}}>

      <TableGrid data={'importData'}/>
    </div >
  )
}

export  {Quantity}
