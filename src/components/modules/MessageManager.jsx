const remoteURL = "http://localhost:5002";

export default {

  getChat(id) {
      return fetch(`${remoteURL}/messages/${id}`).then(result=>result.json())
  },
  getAllMessages() {
      return fetch(`${remoteURL}/messages`).then(result => result.json())
  },
  postMessages(newChat) {
      return fetch(`${remoteURL}/messages`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newChat)
      }).then(result=>result.json())
  },
  getWithUsers() {
    return fetch(`${remoteURL}/messages?_expand=user`)
            .then(result => result.json())
  },
  getWithUsersMessages() {
    return fetch(`${remoteURL}/messages?_expand=user&_embed=messages`)
            .then(result => result.json())
  }
}