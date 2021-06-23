import { Toolbar } from '@material-ui/core'
import React from 'react'
import {PanelHeader} from '../components/index.components'


function ManagementLayout(props) {
  return (

    <PanelHeader>
      <Toolbar />
      <Toolbar />
      {props.children}
    </PanelHeader>

  )
}

export  {ManagementLayout}
