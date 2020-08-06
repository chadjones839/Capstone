const remoteURL = "http://localhost:5002"

export default {
  getJob(id) {
    return fetch(`${remoteURL}/workHistory/${id}`)
      .then(result => result.json())
  },
  getAllJobs() {
    return fetch(`${remoteURL}/workHistory`)
      .then(result => result.json())
  },
  getJobsWithUsers(id) {
    return fetch(`${remoteURL}/workHistory/${id}?_expand=users`)
      .then(result => result.json())
  },
  deleteJob(userId) {
    return fetch(`${remoteURL}/workHistory/${userId}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postJob(newUser) {
      return fetch(`${remoteURL}/workHistory`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
      }).then(result=>result.json())
  },


  getSkill(id) {
    return fetch(`${remoteURL}/skills/${id}`)
      .then(result => result.json())
  },
  getAllSkills() {
    return fetch(`${remoteURL}/skills`)
      .then(result => result.json())
  },
  getSkillsWithUsers(id) {
    return fetch(`${remoteURL}/skills/${id}?_expand=users`)
      .then(result => result.json())
  },
  deleteSkill(userId) {
    return fetch(`${remoteURL}/skills/${userId}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postSkill(newUser) {
      return fetch(`${remoteURL}/skills`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
      }).then(result=>result.json())
  },

  getSchool(id) {
    return fetch(`${remoteURL}/schools/${id}`)
      .then(result => result.json())
  },
  getAllSchools() {
    return fetch(`${remoteURL}/schools`)
      .then(result => result.json())
  },
  getSchoolsWithUsers(id) {
    return fetch(`${remoteURL}/schools/${id}?_expand=user`)
      .then(result => result.json())
  },
  deleteSchool(userId) {
    return fetch(`${remoteURL}/schools/${userId}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postSchool(newUser) {
      return fetch(`${remoteURL}/schools`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
      }).then(result=>result.json())
  }
}