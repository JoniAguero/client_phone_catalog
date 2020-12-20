import { types } from "../types"
import {
  fetchWithoutToken,
  fetchWithToken,
  fetchFormData,
} from "../../services/fetch"
import { setError } from "./errorsActions"
import { uiCloseModal } from "./uiActions"

export const fetchPhones = () => ({ type: types.fetchPhones })
export const fetchPhoneById = () => ({ type: types.fetchPhoneByID })
export const fetchPhoneSuccess = (phones) => ({
  type: types.fetchPhonesSuccess,
  payload: phones,
})
export const fetchPhoneSuccessByID = (phoneSelected) => ({
  type: types.fetchPhoneSuccessById,
  payload: phoneSelected,
})
export const selectPhone = (phoneSelected) => ({
  type: types.selectPhone,
  payload: phoneSelected,
})
export const addNewPhone = () => ({ type: types.addNewPhone })
export const addNewPhoneSuccess = (phone) => ({
  type: types.addNewPhoneSuccess,
  payload: phone,
})
export const deletePhone = () => ({ type: types.deletePhone })
export const deletePhoneSuccess = () => ({
  type: types.deletePhoneSuccess,
})
export const updatePhone = () => ({ type: types.updatePhone })
export const updatePhoneSuccess = () => ({
  type: types.updatePhoneSuccess,
})
export const uploadImagePhone = () => ({ type: types.uploadImagePhone })
export const uploadImagePhoneSuccess = (idPhone, imagePhone) => ({
  type: types.uploadImagePhoneSuccess,
  payload: {
    idPhone,
    imagePhone
  }
})

export const getPhones = () => {
  return async (dispatch) => {
    dispatch(fetchPhones())
    try {
      const resp = await fetchWithoutToken("phones")
      const data = await resp.json()
      dispatch(fetchPhoneSuccess(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getPhoneById = (id) => {
  return async (dispatch) => {
    dispatch(fetchPhoneById())
    try {
      const resp = await fetchWithoutToken(`phones/${id}`)
      const data = await resp.json()
      dispatch(fetchPhoneSuccessByID(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const createPhone = (form, image) => {
  return async (dispatch) => {
    dispatch(addNewPhone())
    try {
      const resp = await fetchWithToken("phones", "POST", { ...form })
      const body = await resp.json()
      const phone = body.phone

      if (image) {
        dispatch(uploadImagePhone())
        const resp = await fetchFormData(
          `phones/upload-image/${phone._id}`,
          image
        )
        const bodyImage = await resp.json()
        if (bodyImage.ok) {
          form.imageFileName = bodyImage.urlImage
          await fetchWithToken(`phones/${phone._id}`, "PUT", { ...form })
          dispatch(uploadImagePhoneSuccess(phone._id, bodyImage.urlImage))
        } else {
          dispatch(setError(body.msg))
        }
      }

      if (body.ok) {
        dispatch(addNewPhoneSuccess())
        dispatch(getPhones())
        dispatch(uiCloseModal())
      } else {
        dispatch(setError(body.msg))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const removePhone = (id) => {
  return async (dispatch) => {
    dispatch(deletePhone())
    try {
      const resp = await fetchWithToken(`phones/${id}`, "DELETE")
      const body = await resp.json()
      if (body.ok) {
        dispatch(deletePhoneSuccess())
        dispatch(getPhones())
      } else {
        dispatch(setError(body.msg))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const editPhone = (id, form, image) => {
  return async (dispatch) => {
    dispatch(updatePhone())
    try {
      if (image) {
        dispatch(uploadImagePhone())
        const resp = await fetchFormData(`phones/upload-image/${id}`, image)
        const body = await resp.json()
        if (body.ok) {
          form.imageFileName = body.urlImage
          dispatch(uploadImagePhoneSuccess(id, body.urlImage))
        } else {
          dispatch(setError(body.msg))
        }
      }

      const resp = await fetchWithToken(`phones/${id}`, "PUT", { ...form })
      const body = await resp.json()

      if (body.ok) {
        dispatch(updatePhoneSuccess())
        dispatch(getPhones())
        dispatch(uiCloseModal())
      } else {
        dispatch(setError(body.msg))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
