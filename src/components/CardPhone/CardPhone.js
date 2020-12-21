import React, { useEffect, useState } from "react"
import { Button, Card, Image, Popup, Transition } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import "./CardPhone.css"
import { camelCase } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { getPhoneById, removePhone, selectPhone } from "../../redux/actions/phonesActions"
import NoImage from "../../assets/images/noimage.png"
import { useSnackbar } from 'react-simple-snackbar'
import { uiOpenModal } from "../../redux/actions/uiActions"

const CardPhone = (props) => {
  const { phone } = props
  const [visible, setVisible] = useState(false)
  const { auth } = useSelector((state) => state)
  const [openSnackbar] = useSnackbar()
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    setVisible(true)
  }, [])

  const navigateToDetail = (phone) => {
    dispatch(getPhoneById(phone._id))
    history.push(`${camelCase(phone.name)}`)
  }

  const handleEditPhone = (phone) => {
    if(!phone.isModifiable) return openSnackbar('This phone cannot be modified');
    dispatch(selectPhone(phone))
    dispatch(uiOpenModal('editPhone', 'small'))
  }

  const handleDeletePhone = (phone) => {
    if(!phone.isModifiable) return openSnackbar('This phone cannot be deleted');
    dispatch(removePhone(phone._id));
  }

  return (
    <Transition visible={visible} animation="scale" duration={500}>
      <Card className="card" data-cy="card-phone">
        <Image
          src={phone.imageFileName ? phone.imageFileName : NoImage}
          wrapped
          ui={false}
          onClick={() => navigateToDetail(phone)}
        />
        <Card.Content>
          <Card.Header data-cy="card-phone-name">{phone.name}</Card.Header>
          <Card.Meta>
            <span className="date">{phone.manufacturer}</span>
          </Card.Meta>
          <Card.Description>
            {`${phone.description.slice(0, 100)}...`}
          </Card.Description>
        </Card.Content>
        {auth.logged && (
          <Card.Content extra>
            <div className="container-buttons">
              <Popup content='Edit' trigger={<Button circular color='green' icon='edit' onClick={() => handleEditPhone(phone)}/>} />
              <Popup content='Delete' trigger={<Button circular color='red' icon='trash' onClick={() => handleDeletePhone(phone)}/>} />
            </div>
          </Card.Content>
        )}
      </Card>
    </Transition>
  )
}

export default CardPhone
