import { makeStyles } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { editCart } from '../../../redux/actions'
import ConfrimModal from './ConfirmModal.component'



const useStyle = makeStyles({
  deleteButton: {
    cursor: 'pointer',
    color: 'darkblue'
  }
})

function DeleteButton(props) {

  const classes = useStyle()

  const handleDeleteProduct = async (flag) => {
    // Api enter ... 
    console.log(flag)

    if (flag == 'true') {

      const currentCart = props.state.cart
      const id = props.id


      let newCart = currentCart.filter(item => {

        if (item.id !== id) {
          return item
        }

      })
      try {
        console.log(newCart)
        await props.editCart(newCart)
        props.isRerender('yes')
        props.newCart(newCart)
      }
      catch (error) {
        console.log(error.message)
      }

    } else {
      // Do nothing!
      console.log('product was not removed ');
    }
  }

  return (

    <ConfrimModal onClick={handleDeleteProduct} />



  )
}
const mapStateToProps = (state) => {
  return { state }
}
const mapDispatchToProps = (dispatch) => {
  return { editCart: (newCart) => dispatch(editCart(newCart)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
