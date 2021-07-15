import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { editCart } from '../../../redux/actions'




const useStyle = makeStyles({
  deleteButton: {
    cursor: 'pointer',
    color: 'darkblue'
  }
})

function DeleteButton(props) {

  const classes = useStyle()

  // const [id, setId] = useState()
  // const [group, setGroup] = useState()


  // useEffect(() => {

  //   if (props.group) {
  //     const group = props.group
  //     setGroup(group)
  //   }
  //   if (props.id) {
  //     const id = props.id
  //     setId(id)
  //   }

  // }, [])



  const handleDeleteProduct = async () => {
    // Api enter ... 

    const confirm = window.confirm('Are you sure you want to remove this product ?')
    if (confirm) {

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
    <span
      onClick={handleDeleteProduct}
      className={classes.deleteButton} >
      حذف
    </span >

  )
}
const mapStateToProps = (state) => {
  return { state }
}
const mapDispatchToProps = (dispatch) => {
  return { editCart: (newCart) => dispatch(editCart(newCart)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
