import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { FormControl } from '@material-ui/core';
import { useState } from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { DateInput } from 'react-hichestan-datetimepicker';
import { connect } from 'react-redux';

import { deleteCart } from '../../../redux/actions';



import Input from '@material-ui/core/Input';

const useStyles$ = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Inputs() {
  const classes = useStyles$();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}





const useStyles = makeStyles((theme) => ({
  container: {
    // overflow:'auto'
  },
  label: {
    marginBottom: '10px'
  },
  typography: {
    textAlign: 'center',
    marginTop: 30,
    paddingBottom: 30
  },
  textField: {
    marginTop: 10
  },
  highlightText: {
    color: '#aaa'
  },
  datePicker: {
    height: 40,
    borderRadius: '5px',
    marginTop: 10,
    border: '1px solid #bbb',
    padding: '10px',
    '&:focus': {
      border: '2px solid #3F51B5',
      outline: 'none'
    },
    '&:hover': {
      border: '1px solid #111',
      outline: 'none'
    }
  }
}))


function PaymentAdd(props) {

  // convert date to iso to send server :
  const date = new Date()
  const isoDate = date.toISOString()
  const [state, setState] = useState(isoDate)
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [tell, setTell] = useState('')
  const [address, setAddress] = useState('')

  const classes = useStyles()



  const handleChangeDatePicker = (event) => {
    // let newState = {};
    let plainDate = event.target.value
    // newState = new Date(plainDate)
    setState(plainDate);
  };

  const handlePaymentButton = () => {

  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const cart = props.cart
    const data = new FormData()
    data.append('customerName', name + ' ' + family)
    data.append('customerAddress', address)
    data.append('deliveryTime', state)
    data.append('orderList', cart)
    data.append('tell', tell)
    const orderNumber=Math.floor(Math.random()*100000)+100000
    window.location.href = `http://localhost:3050/payment?number=${orderNumber}`;
  }

  return (
    <div className={classes.container}>
      {/* <Toolbar /> */}
      <Typography className={classes.typography} variant="h6" gutterBottom>
        نهایی کردن خرید
      </Typography>
      <form onSubmit={handleSubmitForm} >

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>

            <label className={classes.label} for='firstName' >نام :</label>
            <TextField
              className={classes.textField}
              size='small'
              required
              id="firstName"
              name="firstName"
              // label="First name"
              fullWidth
              variant='outlined'
              autoComplete="given-name"
              onChange={(event) => setName(event.target.value)}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <label className={classes.label} for='lastName' >نام خانوادگی :</label>

            <TextField
              className={classes.textField}
              size='small'
              required
              id="lastName"
              name="lastName"
              fullWidth
              variant='outlined'
              autoComplete="family-name"
              onChange={(event) => setFamily(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label} for='address1' >آدرس :</label>
            <TextField
              className={classes.textField}
              size='small'
              required
              id="address1"
              name="address1"
              fullWidth
              variant='outlined'
              autoComplete="shipping address-line1"
              onChange={(event) => setAddress(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label} for='firstName' >  تلفن همراه  :<span className={classes.highlightText} > جهت هماهنگی ارسال سفارش</span></label>
            <TextField
              required
              className={classes.textField}
              size='small'
              id="address2"
              name="address2"
              variant='outlined'
              fullWidth
              autoComplete="shipping address-line2"
              onChange={(event) => setTell(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <label className={classes.label} for='date'> انتخاب تاریخ :</label>
            <DateInput
              className={classes.datePicker}
              id='date'
              value={state}
              name={'myDateTime'}
              onChange={handleChangeDatePicker}
            />
          </Grid>

          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='submit' variant='contained' color='primary' onClick={handlePaymentButton} >
              پرداخت
            </Button>
          </Grid>

        </Grid>



      </form>


    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: () => dispatch(deleteCart())
  }
}

const PaymentAddress = connect(mapStateToProps, mapDispatchToProps)(PaymentAdd)
export { PaymentAddress }



