import React from 'react'
import { Header, Icon } from 'semantic-ui-react';

const NoDataFound = () => {
  return (
    <Header as='h2' icon textAlign='center'>
      <Icon name='dont' circular />
      <Header.Content>No data found</Header.Content>
    </Header>
  )
}

export default NoDataFound;
