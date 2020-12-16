import { types } from '../../redux/types'

describe("Types: ", () => {
  test("types must be the same", () => {
    expect(types).toEqual({
      setError: '[Error] Error detected',
      fetchPhones: '[Phones] Fetch Phones',
      fetchPhonesSuccess: '[Phones] Fetch Success Phones',
      fetchPhoneByID: '[Phones] Fetch Phone by ID',
      fetchPhoneSuccessById: '[Phones] Fetch Success Phone by ID',
    })
  })
})
