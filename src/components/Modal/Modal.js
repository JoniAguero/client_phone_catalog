import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "semantic-ui-react"
import { uiCloseModal } from "../../redux/actions/uiActions"
import "./Modal.css"
import AuthModal from "./AuthModal"
import AddPhoneModal from "./AddPhoneModal"

const ModalComponent = () => {

  const { ui } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <Modal
      size={ui.modal.sizeModal}
      open={ui.modal.open}
      onClose={() => dispatch(uiCloseModal())}
    >
      { ui.modal.typeModal === 'auth' ? <AuthModal /> : <AddPhoneModal /> }
    </Modal>
  )
}

export default ModalComponent
