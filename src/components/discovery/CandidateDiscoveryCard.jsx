import React, { useState, useEffect } from 'react';
import FriendManager from "../modules/FriendManager.jsx";

const CandidateDiscoveryCard = props => {
  
  const sessionUser = JSON.parse(sessionStorage.getItem("user")) 
  const [friends, setFriends] = useState([]) 
  const [newFriend, setNewFriend] = useState({ 
    userId: "", 
    activeUserId: "", 
    mutualInterest: false})

  const friendHandler = () => { 
    console.log('CLICKED FRIEND HANDLER')
    const editedFriend = {
      userId: props.user.id,
      activeUserId: sessionUser.id,
      mutualInterest: true,
      id: friends.id
    };
    console.log('FRIENDS', friends)
    
    friends.filter(friend => {
      if (
        friend.userId === props.user.id && 
        friend.activeUserId === sessionUser.id &&
        friend.mutualInterest === false) {
          console.log(friend)
          editedFriend.id = friend.id
          FriendManager.editFriend(editedFriend)
          console.log('EDIT friend', editedFriend)
          return friend 
      } 
      else if (
        friend.userId !== sessionUser.id && 
        friend.userId !== props.user.id && 
        friend.activeUserId !== sessionUser.id && 
        friend.activeUserId !== props.user.id &&
        friend.mutualInterest === undefined) {
          console.log('CREATE FRIEND')
          createFriend(props.user.id)
          return newFriend
      }
    })    
  }
  
  const createFriend = (id) => {
    newFriend.userId = sessionUser.id
    newFriend.activeUserId = id
    newFriend.mutualInterest = false
    FriendManager.postFriend(newFriend)
    console.log('NEW FRIEND', newFriend)
  }
  
  useEffect(() => {
    FriendManager.getAllFriends()
      .then((response) => {
        setFriends(response)
    })
  }, [])
  
  if (props.user.accountType === "candidate") {
    return (
      <React.Fragment>
        <section className="employerCard">
          <div className="employerCard__image">
            <img src={require(`../images/users/${props.user.image}`)} alt={props.user.firstName} className="employerCard__logo"/>
          </div>
          <div className="employerDetails">
            <h2 className="employerCard__name">{props.user.firstName}</h2>
            <h4 className="employerCard__industry">{props.user.jobTitle}</h4>
          </div>
          <div className="employerCard__body">
            {props.user.bio}
          </div>
          <br />
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
              onClick={friendHandler}>
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
  // else if (props.user.accountType === "candidate") {
  //   return (
  //     <React.Fragment>
  //       <section className="employerCard">
  //         <div className="employerCard__image">
  //           <img src={require(`../images/users/${props.user.image}`)} alt={props.user.firstName} className="employerCard__logo"/>
  //         </div>
  //         <div className="employerDetails">
  //           <h2 className="employerCard__name">{props.user.firstName}</h2>
  //           <h4 className="employerCard__industry">{props.user.jobTitle}</h4>
  //         </div>
  //         <div className="employerCard__body">
  //           {props.user.bio}
  //         </div>
  //         <br />
  //         <br />
  //       </section>
  //       <section className="interestButtons">
  //         <div className="interestButtons__container">
  //           <div className="interestBtn__false">
  //             <button type="submit" className="falseBtn">
  //               Unmatch
  //             </button> 
  //           </div>
  //         </div>
  //       </section>
  //       <br />
  //       <br />
  //       <div className="cardBreak"></div>
  //       <br />
  //       <br />
  //     </React.Fragment>
  //   )
  // }
  else {
    return null
  }    
}


export default CandidateDiscoveryCard;


// ,
//     {
//       "userId": 3,
//       "activeUserId": 1,
//       "mutualInterest": true,
//       "id": 2
//     },
//     {
//       "userId": 5,
//       "activeUserId": 4,
//       "mutualInterest": false,
//       "id": 4
//     },
//     {
//       "userId": 1,
//       "activeUserId": 5,
//       "mutualInterest": true,
//       "id": 5
//     },
//     {
//       "userId": 4,
//       "activeUserId": 3,
//       "mutualInterest": false,
//       "id": 6
//     }