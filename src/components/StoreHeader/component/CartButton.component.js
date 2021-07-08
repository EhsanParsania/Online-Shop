// import React, { Component } from 'react';
// import { Button } from '@material-ui/core';
// import Badge from '@material-ui/core/Badge';
// import { makeStyles } from '@material-ui/core/styles';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { connect } from 'react-redux';
// import { IconButton } from '@material-ui/core';



// function CartButton(props) {
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         color: '#fff'
//       },
//     },
//   }));
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <IconButton aria-label="cart">
//         {
//           props.cartNumber ? <Badge badgeContent={props.cartNumber} color="secondary">  <ShoppingCartIcon />   </Badge> : <ShoppingCartIcon />
//         }
//       </IconButton>

//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   cartNumber: state.cart.length
// })



// export default connect(mapStateToProps)(CartButton)

import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 px',
  },
}))(Badge);

const style = {
  icon: {
    margin: '0 30px',
    color: '#fff'
  }
}

function CartButton(props) {
  return (
    <Link to='/home/cart'>
      <IconButton aria-label="cart" style={style.icon} >
        {
          props.cartNumber ? <StyledBadge badgeContent={props.cartNumber} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge> :
            <ShoppingCartIcon />
        }
      </IconButton>
    </Link>
  );
}
const mapStateToProps = (state) => ({
  cartNumber: state.cart.length
})

export default connect(mapStateToProps)(CartButton)
