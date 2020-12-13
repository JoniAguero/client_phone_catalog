/* eslint-disable import/no-anonymous-default-export */
import { types } from '../types'

const initialState = {
  list: [],
  phoneSelected: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.fetchPhones:
      return {
        ...state
      }

    case types.fetchPhonesSuccess:
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }
}
