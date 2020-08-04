import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import EmployerDiscoveryCard from "../discovery/EmployerDiscoveryCard";

const EmployerDiscovery = props => {

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
      <main className="discoveryContainer">
        <h1 className="discoveryHeader">Discovery</h1>
          {users.map(user =>
            <EmployerDiscoveryCard 
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

export default EmployerDiscovery;