import { fetchWithoutToken } from '../../services/fetch'

describe("API Service: ", () => {
  test("request to the server should work", async () => {
    const resp = await fetchWithoutToken(
      "phones",
      "GET",
      {}
    )
    const body = await resp.json()
    expect(body.length).toBeGreaterThan(1);
  })
})
