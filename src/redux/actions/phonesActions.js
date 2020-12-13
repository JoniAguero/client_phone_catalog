import { types } from "../types"
import { fetchWithoutToken, fetchWithToken } from '../../services/fetch'
import { setError } from "./errorsActions";

export const fetchPhones = () => ({ type: types.fetchPhones });
export const fetchPhoneSuccess = (phones) => ({ type: types.fetchPhonesSuccess, payload: phones });

export const getPhones = () => {
  return async (dispatch) => {
    dispatch(fetchPhones())
    try {
      const resp = await fetchWithoutToken("phones")
      const data = await resp.json();
      dispatch(fetchPhoneSuccess(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
