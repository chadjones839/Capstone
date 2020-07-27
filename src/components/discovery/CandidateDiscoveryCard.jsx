import React from 'react';


const CandidateDiscoveryCard = props => {
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
            <button type="submit" className="trueBtn">
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
    else if (props.user.accountType !== "candidate") {
      return (
        null
      )
    }
  }


export default CandidateDiscoveryCard;