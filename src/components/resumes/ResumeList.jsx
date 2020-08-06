import React, { useState, useEffect } from "react";
import ChatManager from "../modules/ChatManager";
import Navbar from "../nav/Navbar.jsx"
import ResumeCard from "../resumes/ResumeCard";


const ResumeList = props => {

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
        <div className="jobsHeader">
          <h3>Resumes</h3>
        </div>
        <h3 className="chooseJobs">View Resumes for:</h3>
        <br />
        <br />
        <main className="jobsContainer">
          
        {chats.map(chat => 
          <ResumeCard 
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
}

export default ResumeList