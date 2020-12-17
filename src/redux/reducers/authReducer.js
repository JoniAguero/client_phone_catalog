/* eslint-disable import/no-anonymous-default-export */
import { types } from "../types"

const initialState = {
  logged: false,
  uid: null,
  name: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        logged: true,
      }

    case types.authloggedFinish:
      return {
        ...state,
        logged: true,
      }

    case types.authLogout:
      return {
        uid: null,
        name: null,
        logged: false,
      }

    default:
      return state
  }
}
