import React, { useState, useEffect } from "react";
import ChatManager from "../modules/ChatManager";
import Navbar from "../nav/Navbar.jsx"
import ChatCard from "../chat/ChatCard";

const ChatList = props => {

  const [chats, setChats] = useState([]);
  const [users, setusers] = useState([]);

  const getChats = () => {
    return ChatManager.getAllChats()
      .then(chatsFromAPI => {
        setChats(chatsFromAPI)
        setusers(chatsFromAPI.users)
      });
    };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <React.Fragment>
      <div className="statusBar">
          <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="chatContainer">
        <div className="chatHeader">
          <h3>Chats</h3>
        </div>
        {chats.map(chat => 
          <ChatCard 
            key={chat.id} 
            chat={chat}
            {...props} />)}     
      </main>

      <div className="navpanel">
        <Navbar />
      </div>
    </React.Fragment>
  );
};

export default ChatList;