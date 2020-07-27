import React from 'react';


const CandidateDiscoveryCard = props => {
  if (props.user.accountType === "candidate") {
    return (
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
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    )}
    else if (props.user.accountType !== "candidate") {
      return (
        null
      )
    }
  }


export default CandidateDiscoveryCard;