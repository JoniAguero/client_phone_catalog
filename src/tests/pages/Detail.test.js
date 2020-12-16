import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'

import Detail from '../../pages/Detail'

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
    <Detail />
  </Provider>
)

describe('Detail Page: ', () => {
  test('should be displayed correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
