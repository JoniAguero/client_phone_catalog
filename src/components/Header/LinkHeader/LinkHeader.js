import React from 'react'
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react'

const LinkHeader = () => {
  return (
    <div className="link">
        <Link to="/">
          <Header as='h2'>
            <Icon name='mobile alternate' />
            <Header.Content>
              Phone Catalog
              <Header.Subheader>The latest phones on the market are here</Header.Subheader>
            </Header.Content>
          </Header>
        </Link>
      </div>
  )
}

export default LinkHeader
