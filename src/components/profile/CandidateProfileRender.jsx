import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import CandidateProfile from "../profile/CandidateProfile";

const CandidateProfileRender = props => {

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
            <CandidateProfile
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

export default CandidateProfileRender;