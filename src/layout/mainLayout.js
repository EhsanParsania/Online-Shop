import React from 'react'
import StoreHeader from '../components/StoreHeader/StoreHeader.component'

export default function MainLayout(props) {
  return (
    <div>
      <StoreHeader >
        {props.children}
      </StoreHeader>
    </div>
  )
}
