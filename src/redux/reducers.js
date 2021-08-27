import { DELETE_QUANTITY_CHANGE_LOG,
        SET_NEW_QUANTITY,
        ADD_PRODUCT_TO_CART,
        DELETE_CART,
        EDIT_CART,
        ADD_SUM_PRICE } from "./types";

const initialState = {
  quantityChange: [],
  cart: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_QUANTITY:
      return {
        ...state,
        quantityChange: [
          ...state.quantityChange,
          action.payload
        ]
      }
    case DELETE_QUANTITY_CHANGE_LOG:
      return {
        ...state,
        quantityChange: []
      }
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }
    case DELETE_CART:
      return {
        ...state,
        cart: []
      }
    case EDIT_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ADD_SUM_PRICE:
      return {
        ...state,
        price: action.payload
      }

    default: return state
  }
}
