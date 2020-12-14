import { map } from "lodash"
import React from "react"
import { Card, Placeholder } from "semantic-ui-react"

const PlaceholderCard = () => {
  return (
    <Card.Group itemsPerRow={3} stackable doubling>
      {map([1, 2 ,3], (card, index) => (
        <Card key={index}>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length="very short" />
                <Placeholder.Line length="medium" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>
        </Card>
    ))}
    </Card.Group>
  )
}

export default PlaceholderCard
