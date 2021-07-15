import { ADD_PRODUCT_TO_CART, ADD_SUM_PRICE, DELETE_CART, DELETE_ORDER, DELETE_QUANTITY_CHANGE_LOG, EDIT_CART, SET_NEW_QUANTITY } from "./types"

export const setNewQuantity = (payload) => {
  return {
    type: SET_NEW_QUANTITY,
    payload: payload
  }
}

export const deleteQuantityChangeLog = () => {
  return {
    type: DELETE_QUANTITY_CHANGE_LOG

  }
}

export const addProductToCart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: payload
  }
}

export const deleteCart = () => {
  return {
    type: DELETE_CART,

  }
}

export const editCart = (newCart) => {
  return {
    type: EDIT_CART,
    payload: newCart
  }
}

export const addSumPrice = (price) => {
  return {
    type: ADD_SUM_PRICE,
    payload: price
  }
}