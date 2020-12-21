import React from "react"
import { Header, Segment } from "semantic-ui-react"

const ItemFeature = (props) => {
  const { title, text, idCypress } = props

  return (
    <div data-cy={idCypress}>
      <Header as="h5" attached="top">
        {title}
      </Header>
      <Segment attached>{text}</Segment>
    </div>
  )
}

export default ItemFeature
