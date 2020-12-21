import { map } from "lodash"
import React, { useEffect, useState } from "react"
import { Breadcrumb, Header, Image, Transition } from "semantic-ui-react"
import ItemFeature from "./ItemFeature"
import { useHistory } from "react-router-dom"
import NoImage from "../../assets/images/noimage.png"
import "./DetailPhone.css"

const DetailPhone = (props) => {
  const { phone } = props
  const {
    manufacturer,
    batery,
    cameraBack,
    cameraFront,
    color,
    processor,
    ram,
    screen,
    storage,
  } = phone
  const features = [
    {
      title: "Fabricante",
      text: manufacturer,
      idCypress: 'manufacturer'
    },
    {
      title: "Procesador",
      text: processor,
      idCypress: 'processor'
    },
    {
      title: "RAM",
      text: ram,
      idCypress: 'ram'
    },
    {
      title: "Pantalla",
      text: screen,
      idCypress: 'screen'
    },
    {
      title: "Almacenamiento",
      text: storage,
      idCypress: 'storage'
    },
    {
      title: "Batería",
      text: batery,
      idCypress: 'batery'
    },
    {
      title: "Cámara Trasera",
      text: cameraBack,
      idCypress: 'cameraBack'
    },
    {
      title: "Cámara Frontal",
      text: cameraFront,
      idCypress: 'cameraFront'
    },
    {
      title: "Color",
      text: color,
      idCypress: 'color'
    },
  ]
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])

  let history = useHistory()

  const returnPage = () => {
    history.push("/")
  }

  return (
    <Transition visible={visible} animation="scale" duration={500}>
      <div className="container-detail-phone" data-cy="detail-phone">
        <Breadcrumb size="massive">
          <Breadcrumb.Section link onClick={() => returnPage()}>
            Phones
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section data-cy="detail-phone-name" link>{phone.name}</Breadcrumb.Section>
        </Breadcrumb>
        <div className="container-image">
          <Image
            src={phone.imageFileName ? phone.imageFileName : NoImage}
            size="medium"
          />
          <div
            className={`description ${
              !phone.imageFileName ? "description-no-image" : ""
            }`}
          >
            <Header as="h2">Descripción</Header>
            <p data-cy="detail-phone-description">{phone.description}</p>
          </div>
        </div>
        <div className="container-features">
          <div className="features">
            {map(features, (item, index) => (
              <ItemFeature key={index} title={item.title} text={item.text} idCypress={item.idCypress}/>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default DetailPhone
