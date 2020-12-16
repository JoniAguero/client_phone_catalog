import phonesReducer from '../../redux/reducers/phonesReducer'
import { types } from '../../redux/types';

const initialState = {
  list: [],
  phoneSelected: null
}

describe('Phones Reducer: ', () => {
  test('it should return the default state', () => {
    const action = {}
    const state = phonesReducer(initialState, action)

    expect(state).toEqual(initialState)
  })

  test('it should return the correct state after GetPhones', () => {
    const action = {
      type: types.fetchPhonesSuccess,
      payload: [{
        name: 'Phone test',
      }],
    }

    const state = phonesReducer(initialState, action)
    expect(state).toEqual(
      {
        "list": [{"name": "Phone test"}], 
        "phoneSelected": null
    })
  })

  test('it should return the correct state after GetPhoneById', () => {
    const action = {
      type: types.fetchPhoneSuccessById,
      payload: {
        name: 'Phone test',
      },
    }

    const state = phonesReducer(initialState, action)
    expect(state).toEqual(
      {
        "list": [], 
        "phoneSelected": {name: 'Phone test'}
      }
    )
  })
})
