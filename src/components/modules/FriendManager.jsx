const remoteURL = "http://localhost:5002";

export default {

  getFriend(id) {
      return fetch(`${remoteURL}/friends/${id}`).then(result=>result.json())
  },
  getAllFriends() {
      return fetch(`${remoteURL}/friends`).then(result => result.json())
  },
  postFriend(newFriend) {
      return fetch(`${remoteURL}/friends`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newFriend)
      }).then(result=>result.json())
  },
  editFriend(editedFriend) {
    return fetch(`${remoteURL}/friends/${editedFriend.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedFriend)
    }).then(data => data.json);
  },
  getWithUser(id) {
    return fetch(`${remoteURL}/friends/?userId=${id}&_expand=user`)
      .then(result => result.json())
  }
}

// const editedFriend = {
//     userId: props.user.id,
//     FriendUserId: sessionUser.id,
//     mutualInterest: true,
//     id: props.user.Friendes.id
//   };