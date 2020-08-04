import React, { useState, useEffect } from "react";
import ChatManager from "../modules/ChatManager";
import Navbar from "../nav/Navbar.jsx"
import ChatCard from "../chat/ChatCard";

const ChatList = props => {

  const [chats, setChats] = useState([]); 
  
  const getChats =() => {
    return ChatManager.getWithUsers()
  }

  useEffect(() => {
    getChats()
    .then((chatResponse) => {
      setChats(chatResponse)
    })
  }, []);

  return (
    <React.Fragment>
      <div className="statusBar">
          <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
        <div className="chatHeader">
          <h3>Chats</h3>
        </div>
        <main className="chatContainer">
          
        {chats.map(chat => 
          <ChatCard 
            key={chat.id} 
            chat={chat}
            {...props}
          />
        )} 

      </main>
      <div className="navpanel">
        <Navbar />
      </div>
    </React.Fragment>
  )
};

export default ChatList;