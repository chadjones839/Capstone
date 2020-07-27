import React, { useState, useEffect } from 'react';
import LoginManager from "../modules/LoginManager";
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar.jsx"


const EditCandidate = props => {
  
  const [user, setUser] = useState({
    email:"", 
    password:"",
    accountType: "candidate",
    image: "",
    companyName: "",
    industry: "",
    userLocation: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    bio: ""
  })
  
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = event => {
      const stateToChange = {...user};
      stateToChange[event.target.id] = event.target.value
      setUser(stateToChange)
  };

  const updateProfile = event => {
      event.preventDefault();
      setIsLoading(true)

  const editedUser = {
      id: props.match.params.userId,
      email: user.email, 
      password: user.password, 
      accountType: "candidate",
      image: user.image,
      companyName: "", 
      industry: user.industry, 
      userLocation: user.userLocation, 
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
      bio: user.bio
  }

      
    LoginManager.editUser(editedUser)
    .then(() => {
        props.history.push("/profile")
    })

  }

  useEffect(() => {
      LoginManager.getUser(props.match.params.userId)
      .then((user) => {
          setUser(user)
          setIsLoading(false)
      } )    
  }, [props.match.params.userId]);
  
  return (
    <React.Fragment>
        <div className="statusBar">
          <img src="./statusbar.png" alt="status"/>
        </div>
        <main className="profileContainer">
          <section className="profileHeader">
            <div className="logoutButton">
              <Link className="nav-link" to="/profile">
                <button type="submit" className="backbutton">
                  <img src="./backarrow.png" alt="back" />
                </button>
              </Link>
            </div>
            <div className="userProfile__image">
              <div className="userImage__container">
                <img src={`../images/users/${user.image}`}  alt="logo" />
              </div>
            </div>
            <div className="userProfile__right">
            </div>
          </section>
          <section className="userProfile__details">
            <div className="userProfile__name">
              <h2>{user.firstName}</h2>
            </div>
            <div className="userProfile__location">
            {user.userLocation}
            </div>
          </section>
          <section className="editProfileButton">
            <div className="editBtnContainer">
              <button
                  type="button"
                  className="blackBtn"
                  id="submitBtn"
                  disabled={isLoading}
                  onClick={updateProfile}>
                    Save Changes
              </button> 
            </div>
          </section>
          <form className="editProfileForm">
            <fieldset>
              <h3 className="editProfileHeader">Profile Details</h3>

              <label 
                className="editLabel" 
                htmlFor="firstName">
                  First Name
              </label>
              <input 
                type="text"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="firstName"
                value={user.firstName}
              />

              <label 
                className="editLabel" 
                htmlFor="lastName">
                  Last Name
              </label>
              <input 
                type="text"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="lastName"
                value={user.lastName}
              />

              <label 
                className="editLabel" 
                htmlFor="jobTitle">
                  Job Title
              </label>
              <input 
                type="text"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="jobTitle"
                value={user.jobTitle}
              />

              <label 
                className="editLabel" 
                htmlFor="industry">
                  Industry
              </label>
              <input 
                type="text"
                required
                className="editInput"   
                onChange={handleFieldChange}
                id="industry"
                value={user.industry}
              />

              <label 
                className="editLabel" 
                htmlFor="userLocation">
                  Location
              </label>
              <input 
                type="text"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="userLocation"
                value={user.userLocation}
              />

              <label 
                className="editLabel" 
                htmlFor="bio">
                  Bio
              </label>
              <textarea  
                type="text"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="bio"
                value={user.bio}
              /> 


              <h3 className="editProfileHeader">Account Details</h3>

              <label 
                className="editLabel" 
                htmlFor="email">
                  Email
              </label>
              <input 
                type="email"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="email"
                value={user.email}
              />

              <label 
                className="editLabel" 
                htmlFor="password">
                  New Password
              </label>
              <input 
                type="password"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="password"
                value={user.password}
              />

              <label 
                className="editLabel" 
                htmlFor="passwordConfirm">
                  Confirm New Password
              </label>
              <input  
                type="password"
                required
                className="editInput"  
                onChange={handleFieldChange}
                id="passwordConfirm"
                />
            </fieldset>
          </form>
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


export default EditCandidate;