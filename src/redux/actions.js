import { ADD_PRODUCT_TO_CART, DELETE_CART, DELETE_QUANTITY_CHANGE_LOG, SET_NEW_QUANTITY } from "./types"

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