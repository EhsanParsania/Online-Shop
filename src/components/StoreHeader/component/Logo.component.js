import React from 'react';
import Brightness6Icon from '@material-ui/icons/Brightness6';


function Logo(props) {

  const style = {
    logoContainer: {
      // display:'inline-block'
      display: 'flex',
      alignItems: 'center',
      padding: '5px'
    },
    logoText: {
      padding: '5px'
    }

  }
  return (
    <div style={style.logoContainer}>
      <h1 style={style.logoText} >فروشگاه فلان</h1>
      <Brightness6Icon />
    </div>
  );
}

export default Logo;
