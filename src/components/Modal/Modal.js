import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "semantic-ui-react"
import { uiCloseModal } from "../../redux/actions/uiActions"
import LoginContent from "./LoginContent/LoginContent"
import RegisterContent from "./RegisterContent/RegisterContent"
import "./Modal.css"

const ModalComponent = () => {
  const { ui } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [modal, setModal] = useState("loginModal")

  const handleClickChangeModal = (e) => {
    e.preventDefault()
    modal === "loginModal" ? setModal("registerModal") : setModal("loginModal")
  }

  return (
    <Modal
      size="mini"
      open={ui.modalOpen}
      onClose={() => dispatch(uiCloseModal())}
    >
      <Modal.Header>Welcome!</Modal.Header>
      <Modal.Content>
        {modal === "loginModal" ? (
          <LoginContent handleClick={handleClickChangeModal} />
        ) : (
          <RegisterContent handleClick={handleClickChangeModal} />
        )}
      </Modal.Content>
    </Modal>
  )
}

export default ModalComponent
