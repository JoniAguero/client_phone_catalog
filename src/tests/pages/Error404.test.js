import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import Error404 from '../../pages/Error404'

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
    <Error404 />
  </Provider>
)

describe('Error404 Page: ', () => {
  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
