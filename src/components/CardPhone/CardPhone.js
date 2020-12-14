import React, { useEffect, useState } from 'react'
import { Card, Image, Transition } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import './CardPhone.css';
import { camelCase } from 'lodash';
import { useDispatch } from 'react-redux';
import { getPhoneById } from '../../redux/actions/phonesActions';

const CardPhone = (props) => {

  const { phone} = props;
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  let history = useHistory();

  useEffect(() => {
    setVisible(true)
  }, [])

  const navigateToDetail = (phone) => {
    dispatch(getPhoneById(phone._id))
    history.push(`${camelCase(phone.name)}`);
  }

  return (
    <Transition visible={visible} animation='scale' duration={500}>
      <Card className="card" onClick={() => navigateToDetail(phone)}>
        <Image src={phone.imageFileName} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{phone.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{phone.manufacturer}</span>
          </Card.Meta>
          <Card.Description>
            {`${phone.description.slice(0, 100)}...`}
          </Card.Description>
        </Card.Content>
      </Card>
    </Transition>
  )
}

export default CardPhone;
