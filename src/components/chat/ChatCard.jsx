import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserManager from "../modules/UserManager.jsx";
import MessageManager from "../modules/MessageManager.jsx";
import MessageList from "../messages/MessageList";

const ChatCard = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [users, setUsers] = useState([]); 
  const [messages, setMessages] = useState([]); 
  let user = {};
  let message = {};

  users.find(obj => {
    if (obj.id === props.chat.activeUserId) {
      // console.log('FILTERED USERS', obj)
      user = obj
      return obj
    }
    else {
      return null
    }
  });

  const findMessage = messages.pop(obj => {
    if (obj.chatId === props.chat.id) {
      message = obj
      return obj
    }
  })
  console.log('POPPED', findMessage)
  
  
  const getUsers = () => {
    return UserManager.getAllUsers()
  }
  const getMessages = () => {
    return MessageManager.getAllMessages()
  }

  useEffect(() => {
    getUsers()
    .then((userResponse) => {
      getMessages()
      .then ((msgResponse) =>{
        setUsers(userResponse)
        setMessages(msgResponse)
      })
    })
  }, []);

  
  // console.log('OUTSIDE', user)

  if (sessionUser.id === props.chat.userId) {

    // console.log('IF USER', findUser)

    return (
      <React.Fragment>
        {/* {console.log('RETURNED USER', user)} */}
        <section className="chatCard">
          <div className="userImageContainer">
            {
            (user.image !== "") &&
            <div className="userImage">
              <img src={`../images/users/${user.image}`} alt={user.companyName} />
              </div>
            }
          </div>
          <div className="messageDetailsContainer">
            <div className="messageUserName">
              <h4>{user.companyName}</h4>
              <p>session user is userId</p>
            </div>
            <p className="messagePreview">
            {console.log(message.content)}
            {message.content}
            </p>
          </div>
          <div className="chatButton">
            <Link to={`/chats/${props.chat.id}`}>
              <button 
                type="submit" 
                className="chatBtn">
                  Chat
              </button>
            </Link> 
          </div>
        </section>
      </React.Fragment>
  )}
  else if (sessionUser.id === props.chat.activeUserId) {
    // console.log ('ELSE USER', user)
    return (
      <React.Fragment>
        <section className="chatCard">
          <div className="userImageContainer">
            <div className="userImage">
              <img src={require(`../images/users/${props.chat.user.image}`)} alt="Abstergo" />
            </div>
          </div>
          <div className="messageDetailsContainer">
            <div className="messageUserName">
              <h4>{props.chat.user.companyName}</h4>
              <p>session user is activeUserId</p>
            </div>
            <p className="messagePreview">
              {messages.content}
            </p>
          </div>
          <div className="chatButton">
            <Link to={`/chats/${props.chat.id}`}>
              <button 
                type="submit" 
                className="chatBtn">
                  Chat
              </button>
            </Link>  
          </div>
        </section>
      </React.Fragment>
  )}
  else {
    return null;
  }
};

export default ChatCard;