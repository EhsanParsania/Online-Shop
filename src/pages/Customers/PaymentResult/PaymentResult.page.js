import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles, Toolbar } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems:'center',
    flex: 1,
    width: "100%"
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    width: 200
  },
  buttonContainer:{
    display:'flex',
    justifyContent:'center'

  },
  link:{
    textDecoration:'none'
  }
})

function Result(props) {
  const { status, number } = props.match.params
  console.log(status)
  const persianStatus = status === 'success' ? 'موفقیت' : 'خطا';

  const classes = useStyle()




  return (
    <div className={classes.container}>
      <Toolbar />
      <Toolbar />


      {
        status === 'success' ?
          <p className={classes.text}>
            سفارش با کد {number} با موفقیت ثبت شد
          </p> :
          <p className={classes.text}>
            سفارش با کد {number} با خطا مواجه  شد
          </p>
      }
      <section className={classes.buttonContainer}>
        {
          <Link to='/home' className={classes.link} >
          <Button variant='outlined' className={classes.button}>
            برگشت به سایت
          </Button>
          </Link>
        }
      </section>
    </div>
  )
}

const PaymentResult = withRouter(Result)
export { PaymentResult }
