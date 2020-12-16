import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import Home from '../../pages/Home'

jest.mock('../../redux/actions/phonesActions', () => ({
  getPhones: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
  phones: {
    list: [],
    phoneSelected: null
  },
  errors: {
    error: {}
  }
}

const store = mockStore(initialState)
store.dispatch = jest.fn()

const wrapper = mount(
  <Provider store={store}>
    <Home />
  </Provider>
)

describe('Home Page: ', () => {
  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
