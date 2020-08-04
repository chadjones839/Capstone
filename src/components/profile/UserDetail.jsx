/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";
import ChatManager from "../modules/ChatManager";
import FriendManager from "../modules/FriendManager";

const UserDetail = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [user, setUser] = useState({});
  const [chats, setChats] = useState([]);
  const [friends, setFriends] = useState([]);
  let chat = {};
  let friend = {};
  
  const getUsers = () => {
    return UserManager.getUser(props.match.params.userId)
  };

  const getFriends = () => {
    return FriendManager.getAllFriends()
  };

  const getChats = () => {
    return ChatManager.getAllChats()
  };

  chats.find(obj => {
    if (obj.userId === sessionUser.id && obj.activeUserId === props.match.params.userId) {
      chat = obj
      return obj
    }
  })
  console.log(chat)
  

  const deleteMatch = id => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      ChatManager.deleteChat(chat.id)
        .then(() => {
          FriendManager.deleteFriend(id)
          window.location.reload(true)
        })
    }
  };

  useEffect(() => {
    getUsers()
    .then(userResponse => {
      getFriends()
      .then(friendResponse => {
        getChats()
        .then(chatResponse =>{
          setChats(chatResponse)
          setUser(userResponse)
          setFriends(friendResponse)
        })
      })
      
    })
  }, []);

  if (sessionUser.accountType === "candidate") {
    return (
      <>
        <div className="statusBar">
          <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
        </div>
        <main className="profileContainer">
          <section className="profileHeader">
            <div className="logoutButton">
            
            </div>
            <div className="userProfile__image">
              <div className="userImage__container">
                <img src={user.image} alt={user.companyName} />
              </div>
            </div>
            <div className="userProfile__right">
            </div>
          </section>
          <section className="userProfile__details">
            <div className="userProfile__name">
              <h2>{user.companyName}</h2>
            </div>
            <div className="userProfile__location">
            {user.userLocation}
            </div>
          </section>
          <section className="editProfileButton">
            <div className="editBtnContainer">
                <button 
                  onClick={() => deleteMatch(user.id)}
                  className="blackBtn"
                  type="button"
                  >
                    Unmatch
                </button>
            </div>
          </section>
          <section className="profileDetails">
            <dl>
              <dt>Company Name</dt>
                <dd>{user.companyName}</dd>
              <dt>Industry</dt>
                <dd>{user.industry}</dd>
              <dt>Location</dt>
                <dd>{user.userLocation}</dd>
              <dt>Bio</dt>
                <dd>{user.bio}</dd>
            </dl>
          </section>
          <div className="deleteBtnContainer">
          </div>
          <br />
          <br />
          <br />
          <br />
        </main>
        <div className="navpanel">
          <Navbar />
        </div>
      </>
    );
  }
  else if (sessionUser.accountType === "employer") {
    return (
      <>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <main className="profileContainer">
        <section className="profileHeader">
          <div className="logoutButton">
            
          </div>
          <div className="userProfile__image">
            <div className="userImage__container">
              <img src={user.image} alt={user.firstName} />
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
              onClick={() => deleteMatch(user.id)}
              className="blackBtn"
              type="button"
              >
                Unmatch
            </button>
          </div>
        </section>
        <section className="profileDetails">
          <dl>
            <dt>First Name</dt>
              <dd>{user.firstName}</dd>
            <dt>Last Name</dt>
              <dd>{user.lastName}</dd>
            <dt>Location</dt>
              <dd>{user.userLocation}</dd>
            <dt>Job Title</dt>
              <dd>{user.jobTitle}</dd>
            <dt>Industry</dt>
              <dd>{user.industry}</dd>
            <dt>Bio</dt>
              <dd>{user.bio}</dd>
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
    </>
    )
  }
};

export default UserDetail;