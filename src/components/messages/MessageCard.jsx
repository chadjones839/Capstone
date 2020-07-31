import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar.jsx"


const MessageCard = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  


  if (sessionUser.id === props.chat.userId || sessionUser.id === props.chat.activeUserId) {
    return (
      <React.Fragment>
        <main className="MessageContainer">

        </main>  
      </React.Fragment>
  )}
  else {
    return null
  }
}


export default MessageCard;