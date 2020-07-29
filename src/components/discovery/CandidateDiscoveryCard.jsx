import React, { useState, useEffect } from 'react';
import MatchManager from "../modules/MatchManager.jsx";

const CandidateDiscoveryCard = props => {
  
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))  
  const [match, setMatch] = useState({ 
    userId: "", 
    matchUserId: "", 
    mutualInterest: false})
 

  const updateMatch = (id) => { 
    
    const editedMatch = {
      userId: props.user.id,
      matchUserId: sessionUser.id,
      mutualInterest: true,
      id: props.match.params.matchId
    };
    MatchManager.editMatch(editedMatch)
    console.log('EDIT MATCH', editedMatch)
  }
  
  useEffect(() => {
    MatchManager.getMatch(props.match.params.matchId)
      .then(() => {
        setMatch(match)

    })
  }, [])
  
  if (props.user.accountType === "candidate") {
    if (props.user.matches.length > 0) {
      for (let i = 0; props.user.matches.length > 0; i++) {
        console.log(i)
        if (props.user.matches[i].matchUserId === sessionUser.id) {
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
                  onClick={()=>updateMatch(props.user.matches[i].id)}>
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
          )}
          }
      }

      else {
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
                    onClick={()=>props.createMatch(props.user.id)}>
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
        )}
      }
      else if (props.user.accountType !== "candidate") {
        return null
    }
  }


export default CandidateDiscoveryCard;