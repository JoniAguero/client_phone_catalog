import { map } from 'lodash';
import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react';
import  ItemFeature from './ItemFeature';
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

  return (
    <div className="container-detail-phone">
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
  )
}

export default DetailPhone;
