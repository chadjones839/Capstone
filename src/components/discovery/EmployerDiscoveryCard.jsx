import React from 'react';


const DiscoveryCard = props => {
  console.log(props)
  if (props.user.accountType === "employer") {
    return (
      <section className="employerCard">
        <div className="employerCard__image">
          <img src="./abstergo.jpg" alt="abstergo" className="employerCard__logo"/>
        </div>
        <div className="employerDetails">
          <h2 className="employerCard__name">{props.user.employerDetails.companyName}</h2>
          <h4 className="employerCard__industry">{props.user.employerDetails.industry}</h4>
        </div>
        <div className="employerCard__body">
          {props.user.employerDetails.bio}
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
    else if (props.user.accountType !== "employer") {
      return (
        <div></div>
      )
    }
  }


export default DiscoveryCard;