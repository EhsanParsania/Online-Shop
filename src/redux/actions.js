import { SET_NEW_QUANTITY } from "./types"

export const setNewQuantity = (payload) => {
  return {
    type: SET_NEW_QUANTITY,
    payload: payload
  }
}