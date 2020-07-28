const remoteURL = "http://localhost:5002";

export default {

  getMatch(id) {
      return fetch(`${remoteURL}/matches/${id}`).then(result=>result.json())
  },
  getAllMatches() {
      return fetch(`${remoteURL}/matches`).then(result => result.json())
  },
  postMatch(newMatch) {
      return fetch(`${remoteURL}/matches`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newMatch)
      }).then(result=>result.json())
  },
  editMatch(editedMatch) {
    return fetch(`${remoteURL}/matches/${editedMatch.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMatch)
    }).then(data => data.json());
  }
}