import React, { useState } from "react"
import { Modal } from "semantic-ui-react"
import LoginContent from "./LoginContent/LoginContent"
import RegisterContent from "./RegisterContent/RegisterContent"
import "./AuthModal.css"

const AuthModal = () => {

  const [modal, setModal] = useState("loginModal")

  const handleClickChangeModal = (e) => {
    e.preventDefault()
    modal === "loginModal" ? setModal("registerModal") : setModal("loginModal")
  }

  return (
    <>
      <Modal.Header>Welcome!</Modal.Header>
      <Modal.Content data-cy="auth-modal">
        {modal === "loginModal" ? (
          <LoginContent handleClick={handleClickChangeModal} />
        ) : (
          <RegisterContent handleClick={handleClickChangeModal} />
        )}
      </Modal.Content>
    </>
  )
}

export default AuthModal
