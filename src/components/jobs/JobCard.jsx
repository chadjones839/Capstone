import React from 'react';
import JobManager from "../modules/JobManager";

const JobCard = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const deleteListing = id => {
    if (window.confirm("Are you sure you want to delete this listing? This cannot be undone.")) {
      JobManager.deleteJob(id)
    }
  };

  if (sessionUser.accountType === "employer") {
    return (
      <React.Fragment>
        <section className="jobListing" id={props.job.id}>
          <section className="jobDetails">
            <div className="jobTitle">
              <h2>{props.job.jobTitle}</h2>
            </div>
            <div className="jobLocation">
              <h4>{props.job.jobLocation}</h4>
            </div>
          </section>
          <section className="jobBtnContainer">
            <div className="jobBtn__details">
              <button 
                onClick={() => props.history.push(`/jobs/${props.job.id}`)}
                className="jobDetailBtn"
                type="button"
                >
                  Details
              </button>
            </div>
            <div className="jobBtn__edit">
              <button 
                onClick={() => props.history.push(`/jobs/${props.job.id}/edit`)}
                className="jobEditBtn"
                type="button"
                >
                  Edit
              </button>
            </div>
            <div className="jobBtn__delete">
              <button 
                onClick={() => deleteListing(props.job.id)}
                className="jobDeleteBtn"
                type="button"
                >
                  Delete
              </button>
            </div>
          </section>
        </section>
      </React.Fragment>
    )  
  }
  else if (sessionUser.accountType === "candidate") {
    return (
      <React.Fragment>
        <section className="jobListing" id={props.job.id}>
          <section className="jobDetails">
            <div className="jobTitle">
              <h2>{props.job.jobTitle}</h2>
            </div>
            <div className="jobLocation">
              <h4>{props.job.jobLocation}</h4>
            </div>
          </section>
          <section className="jobBtnContainer">
            <div className="jobBtn__details">
              <button 
                onClick={() => props.history.push(`/jobs/${props.job.id}`)}
                className="jobDetailBtn"
                type="button"
                >
                  Details
              </button>
            </div>
          </section>
        </section>
      </React.Fragment>
    )  
  } 
};

export default JobCard;