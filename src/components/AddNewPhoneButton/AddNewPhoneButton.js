import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "semantic-ui-react"
import { uiOpenModal } from "../../redux/actions/uiActions"
import "./AddNewPhoneButton.css"

const AddNewPhoneButton = () => {

  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)

  const handleClick = (type) => {
    dispatch(uiOpenModal('addPhone', 'small'))
  }

  return (
    <div className="add-new-phone-button">
      {auth.logged ? (
        <Button
          circular
          icon="add"
          className="button-add-new-phone"
          onClick={handleClick}
          data-cy="add-phone-button-enabled"
        />
      ) : (
        <Button
          circular
          icon="add"
          className="button-add-new-phone"
          disabled
          data-cy="add-phone-button-disabled"
        />
      )}
    </div>
  )
}

export default AddNewPhoneButton
