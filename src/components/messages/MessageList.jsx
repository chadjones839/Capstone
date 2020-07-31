import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import ChatManager from "../modules/ChatManager";
import MessageCard from "../messages/MessageCard";

const MessageList = props => {

  const [chats, setChats] = useState([]);


  const getChats = () => {
    return ChatManager.getWithMessages()
  };

  useEffect(() => {
    getChats()
    .then((userResponse) => {
      setChats(userResponse)
    })
  }, [])

  return (
    <>
      <div className="statusBar">
        <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="discoveryContainer">
        <h1 className="discoveryHeader">Discovery</h1>
          {chats.map(message =>
            <MessageCard 
              key={message.id} 
              message={message}
              {...props} />
          )}
      </main>
      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default MessageList;