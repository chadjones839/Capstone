import React, { useState, useEffect } from 'react';
import FriendManager from "../modules/FriendManager.jsx";
import ChatManager from "../modules/ChatManager.jsx";

const EmployerDiscoveryCard = props => {
  
  const sessionUser = JSON.parse(sessionStorage.getItem("user")) 
  const [friends, setFriends] = useState([]) 
  const [friend, setFriend] = useState({ 
    userId: "", 
    activeUserId: "", 
    mutualInterest: false})

  const friendHandler = () => { 
    console.log('CLICKED FRIEND HANDLER')

    const editedFriend = {
      userId: props.user.id,
      activeUserId: sessionUser.id,
      mutualInterest: true
    };

    const newChat = {
      activeUserId: sessionUser.id,
      userId: props.user.id
    }

    console.log('FRIENDS', friends)

    friends.find(friend => {
      console.log('BEFORE', friend)
      if (
        friend.userId === props.user.id &&
        friend.activeUserId === sessionUser.id &&
        friend.mutualInterest === false
        ) {
          console.log('FRIEND TO EDIT', friend)
          editedFriend.id = friend.id
          FriendManager.editFriend(editedFriend)
          .then(()=> {
            ChatManager.postChat(newChat)
            console.log('EDITED FRIEND', editedFriend)
            return friend
        })
      } 
      else if (
        props.user.id
        // friend.userId !== props.user.id &&
        // friend.userId !== sessionUser.id &&
        // friend.activeUserId !== props.user.id &&
        // friend.activeUserId !== sessionUser.id &&
        // friend.mutualInterest !== false &&
        // friend.mutualInterest !== true
        ) {
          console.log('CREATE FRIEND')
          createFriend(props.user.id)
          return friend
        }
      else {
        return null
      }
    })

      // createFriend(id)
      // return friend

  }
  
  const createFriend = (id) => {
    friend.userId = sessionUser.id
    friend.activeUserId = id
    friend.mutualInterest = false
    FriendManager.postFriend(friend)
    .then(()=> {
      console.log('NEW FRIEND', friend)
      return friend
    })
  }
  
  useEffect(() => {
    FriendManager.getAllFriends()
      .then((response) => {
        setFriends(response)
    })
  }, [])

  if (props.user.accountType === "employer") {
    return (
      <React.Fragment>
        <section className="employerCard">
          <div className="employerCard__image">
            <img src={require(`../images/users/${props.user.image}`)}  alt={props.user.companyName} className="employerCard__logo"/>
          </div>
          <div className="employerDetails">
            <h2 className="employerCard__name">{props.user.companyName}</h2>
            <h4 className="employerCard__industry">{props.user.industry}</h4>
          </div>
          <div className="employerCard__body">
            {props.user.bio}
          </div>
          <br />
        </section>
        <section className="interestButtons">
          <div className="interestButtons__container">
            <div className="interestBtn__false">
              <button type="submit" className="falseBtn">
                Hard Pass
              </button> 
            </div>
            <div className="interestBtn__true">
              <button 
                type="submit" 
                className="trueBtn" 
                onClick={() => friendHandler(props.user.id)}>
                  Let's Talk
              </button> 
            </div>
          </div>
        </section>
        <br />
        <br />
        <div className="cardBreak"></div>
        <br />
        <br />
      </React.Fragment>
    )
  }
  else {
    return null
  }
}


export default EmployerDiscoveryCard;