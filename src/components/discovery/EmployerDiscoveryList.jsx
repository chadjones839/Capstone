import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import DiscoveryCard from "../discovery/EmployerDiscoveryCard";

const Discovery = props => {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return UserManager.getAllUsers().then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="statusBar">
        <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="discoveryContainer">
        <h1 className="discoveryHeader">Discovery</h1>
          {users.map(user => 
            <DiscoveryCard 
              key={user.id} 
              user={user}
              {...props} />)}
      </main>

      <section className="interestButtons">
        <div className="interestButtons__container">
          <div className="interestBtn__false">
            <button type="submit" className="interestBtn">
              <img src="./X-icon.png" alt="profile" />
            </button> 
          </div>
          <div className="interestBtn__true">
            <button type="submit" className="interestBtn">
              <img src="./check-icon.png" alt="profile" />
            </button> 
          </div>
        </div>
      </section>

      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default Discovery;