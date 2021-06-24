import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


export default function HomeButton() {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '20px'
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        بازگشت به سایت
      </Link>

    </div>
  );
}

