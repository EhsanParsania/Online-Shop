import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './component/Logo.component'
import NavButtons from './component/NavButtons.component';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    left: 'auto',
    right: 0
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: ''
  },
  toolbar: {
    justifyContent:'space-between',
  }

}));

export default function StoreHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* you can give  position="fixed"  */}
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar className={classes.toolbar} >

          <Logo />
          <NavButtons />
          
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
