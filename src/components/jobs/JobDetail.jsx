/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import JobManager from "../modules/JobManager";
import UserManager from "../modules/UserManager";

/*END IMPORTS*****************************************************************/

const JobDetail = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [user, setUser] = useState({})
  const [job, setJob] = useState({
    userId: "",
    jobTitle: "",
    jobLocation: "",
    salaryEstLow: "",
    salaryEstHigh: "",
    salaryActual: "",
    requirements: "",
    jobSummary: "",
  });

  useEffect(() => {
    JobManager.getJob(props.jobId)
      .then(job => {
        setJob({
          userId: job.userId,
          jobTitle: job.jobTitle,
          jobLocation: job.jobLocation,
          salaryEstLow: job.salaryEstLow,
          salaryEstHigh: job.salaryEstHigh,
          salaryActual: job.salaryActual,
          requirements: job.requirements,
          jobSummary: job.jobSummary,
        });
        UserManager.getUser(job.userId)
        .then((response) => {
          setUser(response)
          console.log('RESPONSE', response)
        })
      });
  }, [props.jobId]);

  
  const deleteListing = id => {
    if (window.confirm("Are you sure you want to delete this listing? This cannot be undone.")) {
      JobManager.deleteJob(id)
    }
  };

  return (
    <React.Fragment>
      
      {console.log(job.userId)}
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <div className="listingHeader">
        <div className="jobListing__header">
          <div className="headerLeft">
            <div className="jobImage">
              <img src={user.image} alt={user.companyName} />
            </div>
          </div>
          <div className="headerRight">
            <div className="jobCompany">
              <h3>{user.companyName}</h3>
            </div>
            <div className="jobLocation">
              <h4>{job.jobLocation}</h4>
            </div>
          </div>
        </div> 
      </div>
      <section className="detailedJobListing" id={job.id}>
        <section className="jobDetailHeader">
          <div className="jobTitle">
            <h2>{job.jobTitle}</h2>
          </div>
          {sessionUser.accountType === "employer"
          ?  <div className="jobDetailBtnContainer">
              <div className="jobBtn__delete">
                <button 
                  onClick={() => deleteListing(props.jobId)}
                  className="jobDetailDeleteBtn"
                  type="button"
                  >
                    &#128465;
                </button>
              </div>
              <div className="jobBtn__edit">
                <button 
                  onClick={() => props.history.push(`/jobs/${props.jobId}/edit`)}
                  className="jobDetailEditBtn"
                  type="button"
                  >
                    &#9998;
                </button>
              </div>
            </div>
            : null}
        </section>
        <section className="jobDetails">
          <div className="jobSalary">
            <h5>Est.Salary</h5>
            <p>{job.salaryActual}</p>
            <p>{job.salaryEstLow}{job.salaryEstHigh}</p>
          </div>
          <div className="jobRequirements">
            <h5>Requirements</h5>
            <p>{job.requirements}</p>
          </div>
          <div className="jobSummary">
            <h5>Job Summary</h5>
            <p>{job.jobSummary}</p>
          </div>
          {sessionUser.accountType === "candidate"
          ? <div className="applyBtnContainer">
              <div className="jobBtn__delete">
                <button 
                  onClick={() => props.history.push("/apply-confirm")}
                  className="loginBtn"
                  type="button"
                  >
                    Apply
                </button>
              </div>
            </div>
            : null }
        </section>
      </section>
      <div className="navpanel">
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  )   
};

export default JobDetail;