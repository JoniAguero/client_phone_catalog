/* eslint-disable import/no-anonymous-default-export */
import { types } from '../types'

const initialState = {
  modal: {
    open: false,
    typeModal: null,
    sizeModal: null
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modal : {
          open: true,
          typeModal: action.typeModal,
          sizeModal: action.sizeModal
        }
      }

    case types.uiCloseModal:
      return {
        ...state,
        modal : {
          open: false,
          typeModal: null,
          sizeModal: null
        }
      }

    default:
      return state
  }
}
