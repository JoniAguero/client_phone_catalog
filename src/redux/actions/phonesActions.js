import { types } from "../types"
import { fetchWithoutToken, fetchWithToken } from "../../services/fetch"
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
export const addNewPhone = () => ({ type: types.addNewPhone })
export const addNewPhoneSuccess = (phone) => ({
  type: types.addNewPhoneSuccess,
  payload: phone,
})
export const deletePhone = () => ({ type: types.deletePhone })
export const deletePhoneSuccess = () => ({
  type: types.deletePhoneSuccess
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

export const createPhone = (form) => {
  return async (dispatch) => {
    dispatch(addNewPhone())
    const resp = await fetchWithToken("phones", "POST", {...form})
    const body = await resp.json()
    try {
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
    const resp = await fetchWithToken(`phones/${id}`, "DELETE")
    const body = await resp.json()
    try {
      if (body.ok) {
        dispatch(getPhones())
      } else {
        dispatch(setError(body.msg))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
