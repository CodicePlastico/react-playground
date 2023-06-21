const build = (method, url, body = null) => {
  const user = JSON.parse(localStorage.getItem('scrooge_data'))

  const baseOptions = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'authorization': `Bearer ${user.token}`
    }
  }

  const options = body ? Object.assign(baseOptions, {
    body: JSON.stringify(body)
  }) : baseOptions

  return fetch(`/api${url}`, options)
    .then((response) => {
      if ([401, 403].includes(response.status)) {
        window.location.href = 'login.html'
      } else {
        return response.json()
      }
    })
    .then((data) => data)
    .catch(error => console.log('ERROR > ', error))
}

export default {
  get: (url) => build('GET', url),
  post: (url, data) => build('POST', url, data),
  patch: (url, data) => build('PATCH', url, data),
  put: (url, data) => build('PUT', url, data),
  delete: (url, data) => build('DELETE', url, data),
}