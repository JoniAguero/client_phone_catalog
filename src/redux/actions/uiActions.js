import { types } from "../types"

export const uiOpenModal = (typeModal, sizeModal) => ({
  type: types.uiOpenModal,
  typeModal,
  sizeModal
})
export const uiCloseModal = () => ({ type: types.uiCloseModal })
