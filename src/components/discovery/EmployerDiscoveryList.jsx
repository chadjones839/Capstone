import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import MatchManager from "../modules/MatchManager.jsx";
import EmployerDiscoveryCard from "../discovery/EmployerDiscoveryCard";

const EmployerDiscovery = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))

  const [users, setUsers] = useState([]);
  const [match, setMatch] = useState({ 
    userId: "", 
    matchUserId: "", 
    mutualInterest: false})

  const getUsers = () => {
    return UserManager.getWithMatches()
  };

  const getMatch = () => {
    return MatchManager.getMatch()
  };

  const createMatch = (id) => {
      match.userId = sessionUser.id
      match.matchUserId = id
      match.mutualInterest = false
      MatchManager.postMatch(match)
      console.log('NEW MATCH', match)
    }

  useEffect(() => {
    getUsers()
    .then((userResponse) => {
      getMatch()   
      .then((matchResponse) => {
        setUsers(userResponse)
        setMatch(matchResponse)
      })
    })
  }, [])

  return (
    <>
      <div className="statusBar">
        <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="discoveryContainer">
        <h1 className="discoveryHeader">Discovery</h1>
          {users.map(user =>
            <EmployerDiscoveryCard 
              key={user.id} 
              user={user}
              createMatch={createMatch}
              {...props} />
          )}
      </main>
      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default EmployerDiscovery;