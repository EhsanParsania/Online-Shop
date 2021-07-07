import { DELETE_QUANTITY_CHANGE_LOG, SET_NEW_QUANTITY } from "./types"

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