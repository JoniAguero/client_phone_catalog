import { fetchWithToken, fetchWithoutToken } from "../../services/fetch"
import { types } from "../../redux/types"
import { setError } from "./errorsActions"
import { uiCloseModal } from "./uiActions"

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("auth", "POST", { email, password })
    const body = await resp.json()
    try {
      if (body.ok) {
        localStorage.setItem("token", body.token)
        localStorage.setItem("token-init-date", new Date().getTime())

        dispatch(
          login({
            uid: body.uid,
            name: body.name,
          })
        )
        dispatch(uiCloseModal())
      } else {
        dispatch(setError(body.msg))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "auth/new",
      "POST",
      { email, password, name }
    )
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem("token", body.token)
      localStorage.setItem("token-init-date", new Date().getTime())

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      )
    }
  }
}

export const isLogged = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("auth/renew")
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem("token", body.token)
      localStorage.setItem("token-init-date", new Date().getTime())

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      )
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user,
})

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
  }
}

const logout = () => ({ type: types.authLogout })
