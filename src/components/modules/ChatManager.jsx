const remoteURL = "http://localhost:5002";

export default {

  getChat(id) {
      return fetch(`${remoteURL}/chats/${id}`).then(result=>result.json())
  },
  getAllChats() {
      return fetch(`${remoteURL}/chats`).then(result => result.json())
  },
  postChats(newChat) {
      return fetch(`${remoteURL}/chats`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newChat)
      }).then(result=>result.json())
  },
  getWithUsers(id) {
    return fetch(`${remoteURL}/chats?_expand=user`)
            .then(result => result.json())
  }
}
