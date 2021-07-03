import { SET_NEW_QUANTITY } from "./types";

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


    default: return state
  }
}