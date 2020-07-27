import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar.jsx"


const CandidateProfile = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const clearUser = () => {
    sessionStorage.clear()
  }

  if (sessionUser.id === props.user.id) {
    return (
      <React.Fragment>
        <main className="profileContainer">
          <section className="profileHeader">
            <div className="logoutButton">
              <Link to="/login">
                <button 
                  type="submit" 
                  className="registerLogout"
                  onClick={clearUser}
                >
                  <img src="./logoutButton.png" alt="logout" />
                </button>
              </Link>
            </div>
            <div className="userProfile__image">
              <div className="userImage__container">
                <img src={require(`../images/users/${props.user.image}`)} alt={props.user.firstNme} />
              </div>
            </div>
            <div className="userProfile__right">
            </div>
          </section>
          <section className="userProfile__details">
            <div className="userProfile__name">
              <h2>{props.user.firstName}</h2>
            </div>
            <div className="userProfile__location">
            {props.user.userLocation}
            </div>
          </section>
          <section className="editProfileButton">
            <div className="editBtnContainer">
              <button 
                onClick={() => props.history.push(`/users/${props.user.id}/edit`)}
                className="blackBtn"
                type="button"
                >
                  Edit Profile
              </button>
            </div>
          </section>
          <section className="profileDetails">
            <dl>
              <dt>First Name</dt>
                <dd>{props.user.firstName}</dd>
              <dt>Last Name</dt>
                <dd>{props.user.lastName}</dd>
              <dt>Location</dt>
                <dd>{props.user.userLocation}</dd>
              <dt>Job Title</dt>
                <dd>{props.user.jobTitle}</dd>
              <dt>Industry</dt>
                <dd>{props.user.industry}</dd>
              <dt>Bio</dt>
                <dd>{props.user.bio}</dd>
            </dl>
          </section>
          <br />
          <br />
          <br />
          <br />
        </main>
        <div className="navpanel">
          <Navbar />
        </div>
      </React.Fragment>
  )}
  else {
    return null
  }
}


export default CandidateProfile;