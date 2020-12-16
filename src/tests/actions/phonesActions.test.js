import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { getPhones, getPhoneById } from '../../redux/actions/phonesActions';
import { types } from '../../redux/types';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}
let store = mockStore(initState)

describe('Phone Actions: ', () => {
  beforeEach(() => {
    store = mockStore(initState)
    jest.clearAllMocks()
  })

  test('GetPhones action', async () => {
    await store.dispatch(getPhones())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.fetchPhones,
    })
    expect(actions[1]).toEqual({
      type: types.fetchPhonesSuccess,
      payload: expect.any(Array),
    })
  })

  test('GetPhoneByID action', async () => {
    await store.dispatch(getPhoneById())
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: types.fetchPhoneByID,
    })
    expect(actions[1]).toEqual({
      type: types.fetchPhoneSuccessById,
      payload: expect.any(Object),
    })
  })

})
