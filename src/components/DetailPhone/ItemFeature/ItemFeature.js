import React from 'react'
import { Header, Segment } from 'semantic-ui-react';

const ItemFeature = (props) => {

  const { title, text } = props;

  return (
    <div>
    <Header as='h5' attached='top'>
      {title}
    </Header>
    <Segment attached>{text}</Segment>
  </div>
  )
}

export default ItemFeature;
