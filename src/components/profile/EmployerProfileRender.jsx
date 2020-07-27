import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import EmployerProfile from "../profile/EmployerProfile";

const EmployerProfileRender = props => {

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
      <main className="profileContainer">
          {users.map(user =>
            <EmployerProfile
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

export default EmployerProfileRender;