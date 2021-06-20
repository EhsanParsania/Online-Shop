import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



export default function CartButton() {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: '#fff'
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Button>

    </div>
  );
}

