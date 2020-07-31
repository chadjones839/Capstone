import React from 'react';
import { Link } from "react-router-dom";


const EmployerProfile = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const clearUser = () => {
    sessionStorage.clear()
  }

  if (sessionUser.id === props.user.id) {
    return (
      <React.Fragment>
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
              <img src={require(`../images/users/${props.user.image}`)} alt={props.user.companyName} />
            </div>
          </div>
          <div className="userProfile__right">
          </div>
        </section>
        <section className="userProfile__details">
          <div className="userProfile__name">
            <h2>{props.user.companyName}</h2>
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
            <dt>Company Name</dt>
              <dd>{props.user.companyName}</dd>
            <dt>Industry</dt>
              <dd>{props.user.industry}</dd>
            <dt>Location</dt>
              <dd>{props.user.userLocation}</dd>
            <dt>Bio</dt>
              <dd>{props.user.bio}</dd>
          </dl>
        </section>
    </React.Fragment>
  )}
  else {
    return null
  }
}


export default EmployerProfile;