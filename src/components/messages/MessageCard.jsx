import React from 'react';
import { Link } from "react-router-dom";
import ChatCard from '../chat/ChatCard';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const MessageCard = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  
  
  if (props.match.params.chatId == props.message.chatId) {
    if (props.message.userId !== sessionUser.id) {
    return (
      <React.Fragment>
        <main className="inboundUser">
          <div className="userContainer">
            <div className="userDetails">
              <div className="userImage">
                <img src={require(`../images/users/userIcon.png`)} alt="userIcon" />
              </div>
              <div className="inboundUserMessage">
                {props.message.content}
              </div>
            </div>
          </div>
        </main>  
      </React.Fragment>
    )
    }
    else {
      return (
        <React.Fragment>
          <main className="outboundUser">
            <div className="userContainer">
              <div className="userDetails">
                <div className="outboundUserMessage">
                  {props.message.content}
                </div>
                <div className="userImage">
                  <img src={require(`../images/users/userIcon.png`)} alt="userIcon" />
                </div>
              </div>
            </div>
          </main>  
        </React.Fragment>
      )
    }
  }
  else {
    return null
  }
}


export default MessageCard;