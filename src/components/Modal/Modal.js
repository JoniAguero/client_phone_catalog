import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "semantic-ui-react"
import { uiCloseModal } from "../../redux/actions/uiActions"
import "./Modal.css"
import AuthModal from "./AuthModal"
import AddPhoneModal from "./AddPhoneModal"

const ModalComponent = () => {
  const { ui, phones } = useSelector((state) => state)
  const dispatch = useDispatch()

  const getTypeModal = () => {
    switch (ui.modal.typeModal) {
      case "auth":
        return <AuthModal />
      case "addPhone":
        return <AddPhoneModal />
      case "editPhone":
        return <AddPhoneModal />
      default:
        break
    }
  }

  return (
    <Modal
      size={ui.modal.sizeModal}
      open={ui.modal.open}
      onClose={() => dispatch(uiCloseModal())}
    >
      {getTypeModal()}
    </Modal>
  )
}

export default ModalComponent
