import { types } from "../types"

export const setError = (error) => ({ type: types.setError, payload: error })
export const unsetError = (error) => ({ type: types.unsetError, payload: "" })
