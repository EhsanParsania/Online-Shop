import React from 'react'
import { Toolbar } from '@material-ui/core'
import {StoreHeader} from '../components/index.components'

function MainLayout(props) {
  return (
    <div>
      <StoreHeader >
        {/* <Toolbar />
        <Toolbar /> */}
        {props.children}
      </StoreHeader>
    </div>
  )
}

export {MainLayout}
