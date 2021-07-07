import { DELETE_QUANTITY_CHANGE_LOG, SET_NEW_QUANTITY } from "./types";

const initialState = {
  quantityChange: []
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

    default: return state
  }
}