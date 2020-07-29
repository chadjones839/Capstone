const remoteURL = "http://localhost:5002"

export default {
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`)
      .then(result => result.json())
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`)
      .then(result => result.json())
  },
  getWithChats(id) {
    return fetch(`${remoteURL}/users/${id}?_embed=chats`)
      .then(result => result.json())
  },
  getWithMatches() {
    return fetch(`${remoteURL}/users?_embed=matches`)
      .then(result => result.json())
  }
}