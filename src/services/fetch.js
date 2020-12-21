const baseUrl = "https://api-phone-catalog.herokuapp.com/api"

const fetchWithoutToken = (endpoint, method = "GET", data) => {
  const url = `${baseUrl}/${endpoint}`

  if (method === "GET") {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
  }
}

const fetchWithToken = (endpoint, method = "GET", data) => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem("token") || ""

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
      },
    })
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    })
  }
}


const fetchFormData = (endpoint, formData) => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem("token") || ""

  return fetch(url, {
    method: "POST",
    headers: {
      "x-token": token,
    },
    body: formData
  })
}

export { fetchWithoutToken, fetchWithToken, fetchFormData }
