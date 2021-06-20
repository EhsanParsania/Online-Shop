import React from 'react'
import PanelHeader from '../components/PanelHeader/PanelHeader.component'

function ManagementLayout(props) {
  return (

      <PanelHeader>
        {props.children}
      </PanelHeader>

  )
}

export default ManagementLayout
