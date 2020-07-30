import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import CandidateDiscoveryCard from "../discovery/CandidateDiscoveryCard";

const CandidateDiscovery = props => {

  const [users, setUsers] = useState([]);


  const getUsers = () => {
    return UserManager.getWithFriends()
  };

  useEffect(() => {
    getUsers()
    .then((userResponse) => {
      setUsers(userResponse)
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
            <CandidateDiscoveryCard 
            key={user.id} 
            user={user}
            {...props} />
          )}
      </main>
      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default CandidateDiscovery;