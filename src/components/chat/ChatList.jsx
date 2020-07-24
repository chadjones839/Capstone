import React from "react";
import Navbar from "../nav/Navbar.jsx"

const Chat = () => {

  return (
    <React.Fragment>
      <div className="statusBar">
          <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="chatContainer">
        <h1 className="chatHeader">Chat</h1>

      </main>

      <div className="navpanel">
        <Navbar />
      </div>
    </React.Fragment>
  );
};

export default Chat;