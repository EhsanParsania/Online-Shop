import React from 'react';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { Typography } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';


function Logo(props) {

  const style = {
    logoContainer: {
      // display:'inline-block'
      display: 'flex',
      alignItems: 'center',
      // padding: '5px'
    },
    logoText: {
      // padding: '5px'
    }
  }

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
  }));

  const classes=useStyles()
  return (
    <div style={style.logoContainer}>
      <Typography className={classes.title} variant="h6" noWrap>
        فروشگاه فلان
      </Typography>
      {/* <h1 style={style.logoText} >فروشگاه فلان</h1> */}
      <Brightness6Icon />
    </div>
  );
}

export default Logo;
