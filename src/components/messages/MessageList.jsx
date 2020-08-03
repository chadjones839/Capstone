import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import MessageManager from "../modules/MessageManager";
import MessageCard from "../messages/MessageCard";

const MessageList = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState(
    {
      chatId: props.match.params.chatId,
      userId: sessionUser.id, 
      content: ""
    });

  const handleFieldChange = event => {
      const stateToChange = {...message}
      stateToChange[event.target.id] = event.target.value
      setMessage(stateToChange)
  }
  
  const postNewMessage = event => {
      event.preventDefault();
      if (message.content === "") {
        window.alert("Write something first")
      } 
      else {
        setIsLoading(true);
        MessageManager.postMessage(message)
        .then(() => {
          props.history.push(`/chats/${props.match.params.chatId}`)
          window.location.reload(true)
        })
      }   
    }

  const getMessages = () => {
    return MessageManager.getAllMessages()
  };

  useEffect(() => {
    getMessages()
    .then((response) => {
      setMessages(response)
    })
  }, [])

  console.log('MESSAGES', messages)

  
  return (
    <>
      <div className="statusBar">
          <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="chatContainer">
        <div className="chatHeader">
          <h3>Chat</h3>
        </div>
          {messages.map(message =>
            <MessageCard 
              key={message.id} 
              message={message}
              {...props} />
          )}
      </main> 
        <section className="messageInput">
          <div className="messageInput__compose">
            <form className="messageForm__form">
              <fieldset className="messageForm__fieldset">
                <textarea
                  className="messageForm__content" 
                  name="content"  
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="content"
                  placeholder="Say something..."
                  autoFocus
                  spellCheck={true}
                  />
              </fieldset>
            </form>
          </div>
          <div className="messageForm__button">
            <button
              className="messageForm__submit"
              type="button"
              id="msgSend"
              disabled={isLoading}
              onClick={postNewMessage}>
              &#10148;
            </button>                       
          </div>
        </section>
         
    </>
  );
};

export default MessageList;