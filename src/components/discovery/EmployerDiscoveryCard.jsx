import React, { useState, useEffect } from 'react';
import MatchManager from "../modules/MatchManager.jsx";


const EmployerDiscoveryCard = props => {
  
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))  
  const [match, setMatch] = useState([]);
 

  const getMatch = () => {
    return MatchManager.getMatch()
  };

  
  const updateMatch = (id) => { 
    
    const editedMatch = {
      userId: props.user.id,
      matchUserId: sessionUser.id,
      mutualInterest: true,
      id: id
    };
    MatchManager.editMatch(editedMatch)
    console.log('EDIT MATCH', editedMatch)
  }
  
  useEffect(() => {
    getMatch()
      .then((matchResponse) => {
        setMatch(matchResponse)

    })
  }, [])

  // props.user.matches[0].matchUserId

  if (props.user.accountType === "employer") {
    if (props.user.matches.length > 0) {
      if (props.user.matches[0].matchUserId) {
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
                  onClick={()=>updateMatch(props.user.matches[0].id)}>
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
    else {
      console.log('CREATE')
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
    else if (props.user.accountType !== "employer") {
      return null
    }
  }


export default EmployerDiscoveryCard;