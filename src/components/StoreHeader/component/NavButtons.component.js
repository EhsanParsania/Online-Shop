import React from 'react';
import ManagementButton from './ManagementButton.component'
import CartButton from './CartButton.component'
import {SearchField} from './SearchField.component'



function NavButtons() {
  const style = {
    navButton: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  return (
    <div style={style.navButton}>
      <ManagementButton />
      <CartButton />
      <SearchField/>

    </div>
  )
}

export default NavButtons
