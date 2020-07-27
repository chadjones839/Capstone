import React from 'react';


const EmployerDiscoveryCard = props => {
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
            <button type="submit" className="interestBtn">
              <img src="./X-icon.png" alt="profile" />
            </button> 
          </div>
          <div className="interestBtn__true">
            <button type="submit" className="interestBtn">
              <img src="./check-icon.png" alt="profile" />
            </button> 
          </div>
        </div>
      </section>
    </React.Fragment>
    )}
    else if (props.user.accountType !== "employer") {
      return (
        null
      )
    }
  }


export default EmployerDiscoveryCard;