/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import JobManager from "../modules/JobManager";

/*END IMPORTS*****************************************************************/

const JobListingEdit = props => {

  const [isLoading, setIsLoading] = useState(false);
  const [job, setJob] = useState({
    userId: "",
    jobTitle: "",
    jobLocation: "",
    salaryActual: "",
    rate: "",
    requirements: "",
    jobSummary: "",
  });

  const handleFieldChange = event => {
    const stateToChange = {...job};
    stateToChange[event.target.id] = event.target.value
    setJob(stateToChange)
  };
  console.log(props.match.params.jobId)
  const updateJob = event => {
    event.preventDefault();
    setIsLoading(true)

    const editedJob = {
        id: props.match.params.jobId,
        userId: job.userId,
        jobTitle: job.jobTitle,
        jobLocation: job.jobLocation,
        salaryActual: job.salaryActual,
        rate: job.rate,
        requirements: job.requirements,
        jobSummary: job.jobSummary,
    };

    JobManager.editJob(editedJob)
    .then(() => {
        props.history.push(`/jobs/${props.match.params.jobId}`)
    })

  }
      
  useEffect(() => {
    JobManager.getJob(props.match.params.jobId)
    .then((job) => {
        setJob(job)
        setIsLoading(false)
    } )    
  }, [props.match.params.jobId]);

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <div className="listingHeader">
        <div className="jobListing__header">
          <h2>Edit Listing</h2>
        </div> 
      </div>
      <section className="editJobListing" id={job.id}>
        <form className="editProfileForm">
          <fieldset className="editJobDetails">
            
            <label 
              className="editLabel" 
              htmlFor="jobTitle">
                Job Title *
            </label>
            <input 
              type="text"
              required
              className="editInput"  
              onChange={handleFieldChange}
              id="jobTitle"
              value={job.jobTitle}
            />
            
            <label 
              className="editLabel" 
              htmlFor="jobLocation">
                Job Location *
            </label>
            <input 
              type="text"
              required
              className="editInput"  
              onChange={handleFieldChange}
              id="jobLocation"
              value={job.jobLocation}
            />

            <div className="salaryFields">
              <div className="salaryEdit">
                <label 
                  className="editLabel" 
                  htmlFor="salaryActual">
                    Salary
                </label>
                <input 
                  type="text"
                  className="editInput"  
                  onChange={handleFieldChange}
                  id="salaryActual"
                  value={job.salaryActual}
                />
              </div>
              <div className="rateEdit">
                <label 
                  className="editLabel" 
                  htmlFor="rate">
                    Rate
                </label>
                <select 
                  type="text"
                  className="editInputRate"  
                  onChange={handleFieldChange}
                  id="rate"
                  value={job.rate}
                >
                  <option value="Annually">Annually</option>
                  <option value="Hourly">Hourly</option>
                </select>
              </div>
            </div>

            <label 
              className="editLabel" 
              htmlFor="requirements">
                Requirements
            </label>
            <textarea 
              type="text"
              className="editInputTextarea"  
              onChange={handleFieldChange}
              id="requirements"
              value={job.requirements}
            />

            <label 
              className="editLabel" 
              htmlFor="jobSummary">
                Job Summary *
            </label>
            <textarea 
              type="text"
              required
              className="editInputTextarea"  
              onChange={handleFieldChange}
              id="jobSummary"
              value={job.jobSummary}
            />

          </fieldset>
        </form>
      </section>
      <div className="saveEditChanges">
        <button
          type="button"
          className="blackBtn"
          id="submitBtn"
          disabled={isLoading}
          onClick={updateJob}>
            Save Changes
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default JobListingEdit;