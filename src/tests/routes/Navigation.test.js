import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import Navigation from '../../routes/Navigation'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
  auth: {
    logged: false,
    uid: null,
    name: null
  },
  phones: {
    list: [],
    phoneSelected: null
  },
  errors: {
    error: {}
  },
  ui: {
    modal: {
      open: false,
      typeModal: null,
      sizeModal: null
    }
  }
}

describe('Test <Navigation /> ', () => {
  test('Match snapshot', () => {
    
    const store = mockStore(initialState)

    const wrapper = mount(
      <Provider store={store}>
        <Navigation />
      </Provider>
    )

    expect( wrapper ).toMatchSnapshot();
  })
})
