import React from 'react';


function Logo(props) {

  const style = {
    logoContainer: {
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
      <h1 style={style.logoText} >پنل مدیریت فروشگاه </h1>
    </div>
  );
}

export default Logo;
