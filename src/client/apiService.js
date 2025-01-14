const BASE_URL = 'http://localhost:8080'

function getItems() {
  return fetchRequest('/api/items')
}

function getItemsByName(name) {
  return fetchRequest('/api/items/' + encodeURI(name))
}

function fetchRequest(path) {
  return fetch(BASE_URL + path)
    .then((res) => (res.status <= 400 ? res : Promise.reject()))
    .then((res) => (res.status === 204 ? res : res.json()))
    .catch((err) => {
      console.log(`Error fetching ${path}:`, err)
    })
}

export default { getItems, getItemsByName }
