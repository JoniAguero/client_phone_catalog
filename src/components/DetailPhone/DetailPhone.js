import { map } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Header, Image, Transition } from 'semantic-ui-react';
import  ItemFeature from './ItemFeature';
import { useHistory } from "react-router-dom";
import "./DetailPhone.css";

const DetailPhone = (props) => {

  const { phone } = props;
  const { batery, cameraBack, cameraFront, color, processor, ram, screen, storage } = phone;
  const features = [
    {
      title: 'Procesador',
      text: processor
    }
    ,{
      title: 'RAM',
      text: ram
    }
    ,{
      title: 'Pantalla',
      text: screen
    },
    {
      title: 'Almacenamiento',
      text: storage
    },
    {
      title: 'Batería',
      text: batery
    },
    {
      title: 'Cámara Trasera',
      text: cameraBack
    },
    {
      title: 'Cámara Frontal',
      text: cameraFront
    },
    {
      title: 'Color',
      text: color
    }
  ]
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])

  let history = useHistory();

  const returnPage = () => {
    history.push('/');
  }

  return (
    <Transition visible={visible} animation='scale' duration={500}>
      <div className="container-detail-phone">
        <Breadcrumb size='massive'>
          <Breadcrumb.Section link onClick={() => returnPage()}>Phones</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link>{phone.name}</Breadcrumb.Section>
        </Breadcrumb>
        <div className="container-image">
          <Image src={phone.imageFileName} size='medium' />
          <div className="description">
          <Header as='h2'>Descripción</Header>
            <p>
              {phone.description}
            </p>
          </div>
        </div>
        <div className="container-features">
          <div className="features">
            {map(features, (item, index) => (
              <ItemFeature key={index} title={item.title} text={item.text} />
            ))}
          </div>
        </div>   
      </div>
    </Transition>
  )
}

export default DetailPhone;
