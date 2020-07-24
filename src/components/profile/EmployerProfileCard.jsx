import React, { useState } from 'react';


const EmployerProfileCard = props => {

  
  // const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  // const clearUser = () => {
  //   sessionStorage.clear()
  //   setHasUser(sessionUser)
  // }
  
  // const [hasUser, setHasUser] = useState(sessionUser !== null);
  

  return (
    <React.Fragment>
        <section className="profileHeader">
          <div className="logoutButton">
            <button type="submit" className="registerLogout">
              <img src="./logoutButton.png" alt="logout" />
            </button>
          </div>
          <div className="userProfile__image">
            <div className="userImage__container">
              <img src="./abstergo.jpg" alt="logo" />
            </div>
          </div>
          <div className="userProfile__right">
          </div>
        </section>
        <section className="userProfile__details">
          <div className="userProfile__name">
            <h2>Abstergo Industries</h2>
          </div>
          <div className="userProfile__location">
            Nashville, TN
          </div>
        </section>
        <section className="editProfileButton">
          <div className="editBtnContainer">
            <button type="submit" className="blackBtn">
              Edit Profile
            </button>
          </div>
        </section>
        <section className="profileDetails">
          <dl>
            <dt>Company Name</dt>
              <dd>Abstergo Industries</dd>
            <dt>Industry</dt>
              <dd>World Domination</dd>
            <dt>Location</dt>
              <dd>Nashville, TN</dd>
            <dt>Bio</dt>
              <dd>The destruction of the Assassin Order, the procurement of advanced technologies originally created by the First Civilization, and establishing a New World Order is our primary goal. Then on Fridays, we have our Hawaiian shirt days. If you want to you can go ahead and wear a Hawaiian shirt and jeans.</dd>
          </dl>
        </section>
      </React.Fragment>
)}


export default EmployerProfileCard;