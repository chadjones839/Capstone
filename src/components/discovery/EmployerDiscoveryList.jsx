import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import MatchManager from "../modules/MatchManager.jsx";
import EmployerDiscoveryCard from "../discovery/EmployerDiscoveryCard";

const EmployerDiscovery = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [matches, setMatches] = useState([]);
  const [match, setMatch] = useState({ userId: "", matchUserId: "", mutualInterest: false})

  const getUsers = () => {
    return UserManager.getAllUsers().then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };

  const getUser = () => {
    UserManager.getUser(props.match.params.userId)
      .then(user => {
        setUser(user);
      });
  };

  const getMatches = () => {
    return MatchManager.getAllMatches().then(response => {
      setMatches(response)
    });
  };

  const editedMatch = {
    id: props.match.params.matchId,
    userId: match.userId,
    matchUserId: match.matchUserId,
    mutualInterest: true,
  };


  const getMatch = () => {
    MatchManager.getMatch(props.match.params.matchId)
      .then(match => {
        setMatch(match);
      });
  };

  

  const createMatch = (id) => {
    getMatch(props.match.params.matchId)
    if (user.id === id) {
      MatchManager.editMatch(editedMatch)
      console.log('EDITED MATCH', editedMatch)
    }  
    else if (sessionUser.id !== id && matches.userId !== sessionUser.id && matches.matchUserId !== sessionUser.id) {
      match.userId = sessionUser.id
      match.matchUserId = id
      match.mutualInterest = false
      MatchManager.postMatch(match)
      console.log('MATCHES', matches)
      console.log('NEW MATCH', match)
      console.log('USER', user)
    }
  }

  useEffect(() => {
    getUsers();
    getMatches();
    getMatch();
    getUser();
  }, []);

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