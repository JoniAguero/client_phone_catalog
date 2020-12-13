import React, { useEffect, useState } from 'react'
import { Card, Image, Transition } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import './CardPhone.css';

const CardPhone = (props) => {

  const { phone} = props;
  const [visible, setVisible] = useState(false)
  let history = useHistory();

  useEffect(() => {
    setVisible(true)
  }, [])

  const navigateToDetail = (id) => {
    history.push(`${id}`);
  }

  return (
    <Transition visible={visible} animation='scale' duration={500}>
      <Card className="card" onClick={() => navigateToDetail(phone._id)}>
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
