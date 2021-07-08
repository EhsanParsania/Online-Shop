import React from 'react';
import { Typography } from '@material-ui/core'
import {  makeStyles } from '@material-ui/core/styles';
import persiaIcon from '../../../asset/logo/persia-icon.png'
import logoText from '../../../asset/logo/logotext.png'
import { Link } from 'react-router-dom';

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
    },
    logo: {
      width: 50,
      heigth: 50,
      filter: ' invert()'
      
    },
    logoText: {
      width: 150,
      height: 40,
      filter: ' invert()',
      paddingTop: 10

    }
  }

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: 'none',
      '&:hover':{
        filter:' drop-shadow(2px 2px 10px #111)'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        margin: '0 20px',
        padding: 5,
        marginTop: 2
      },
 
    }
  }));

  const classes = useStyles()
  return (
    <Link to='/home' >
      <div style={style.logoContainer}>
        
        <img   src={persiaIcon} style={style.logo} alt='logo' />

        <Typography className={classes.title} noWrap>
          <img src={logoText} style={style.logoText} alt='logoText' />
        </Typography>
        {/* <h1 style={style.logoText} >فروشگاه فلان</h1> */}
        {/* <Brightness6Icon /> */}
        {/* <img style={style.logo} src={persiaIcon} /> */}
      </div>
    </Link>

  );
}

export default Logo;
