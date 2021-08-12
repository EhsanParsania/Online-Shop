import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

const useStyle=makeStyles((theme)=>({
  icon: {
    margin: '0 10px',
    color: '#fff'
  },
  [theme.breakpoints.up('sm')]: {
    icon: {
      margin: '0 30px',
      color: '#fff'
    },
  }
}))



function CartButton(props) {
  const classes=useStyle()
  return (
    <Link to='/home/cart'>
      <IconButton aria-label="cart" className={classes.icon} >
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
