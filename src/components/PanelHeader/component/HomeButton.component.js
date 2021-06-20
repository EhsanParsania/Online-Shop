import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
      <Button>
       بازگشت به سایت
      </Button>

    </div>
  );
}

