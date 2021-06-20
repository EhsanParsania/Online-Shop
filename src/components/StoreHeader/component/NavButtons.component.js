import React from 'react';
import ManagementButton from './ManagementButton.component'
import CartButton from './CartButton.component'



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
    </div>
  )
}

export default NavButtons
