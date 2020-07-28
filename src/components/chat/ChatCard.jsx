import React from "react";

const ChatCard = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));

  if (sessionUser.id === props.chat.userId) {
    return (
      <React.Fragment>
        <section className="chatCard">
          <div className="userImageContainer">
            <div className="userImage">
              <img src={require(`../images/users/${props.chat.user.image}`)}  alt="Abstergo" />
            </div>
          </div>
          <div className="messageDetailsContainer">
            <div className="messageUserName">
              <h4>{props.chat.user.companyName}</h4>
            </div>
            <p className="messagePreview">
              Are you ready to join the Templar Brotherhood and rid the world of the Assassins order?
            </p>
          </div>
        </section>
      </React.Fragment>
  )}
  else if (sessionUser.id === props.chat.activeUserId) {
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
            </div>
            <p className="messagePreview">
              Are you ready to join the Templar Brotherhood and rid the world of the Assassins order?
            </p>
          </div>
        </section>
      </React.Fragment>
  )}
  else {
    return null;
  }
};

export default ChatCard;