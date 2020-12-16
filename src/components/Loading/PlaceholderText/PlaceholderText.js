import { map } from 'lodash';
import React from 'react'
import { Placeholder } from "semantic-ui-react"

const PlaceholderText = () => {
  return (
    <Placeholder fluid>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
      {map(Array(25), (el, index) => (
        <Placeholder.Line key={index}/>
      ))}
      </Placeholder.Paragraph>
    </Placeholder>
  )
}

export default PlaceholderText;
