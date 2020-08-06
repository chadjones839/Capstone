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
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <h1 className="discoveryHeader">Discovery</h1>
      <main className="discoveryContainer">
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