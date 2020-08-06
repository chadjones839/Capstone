import React, { useState } from 'react';
import ResumeManager from '../modules/ResumeManager';

const WorkHistory = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [job, setJob] = useState({
    userId: sessionUser.id,
    jobTitle: "",
    company: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    current: isChecked,
    description: "",
  });

  const checkBoxValue = evt => {
    if (!isChecked) {
      job.current= true
      job.endMonth=""
      job.endYear=""
      document.querySelector("#endDateFields").style.display = "none"
      setIsChecked(true);
    }
    else {
      job.current = false
      document.querySelector("#endDateFields").style.display = "flex"
      setIsChecked(false)
    }
  }


  const handleFieldChange = evt => {
    const stateToChange = { ...job };
    stateToChange[evt.target.id] = evt.target.value;
    setJob(stateToChange);
  };

  const createJob = evt => {
    evt.preventDefault();
    if (job.jobTitle === "" || job.company === "" || job.startMonth === "" || job.startYear === "" || job.description === "") {
      window.alert("Hold up boss, you're missing a field or two!");
    } else {
      setIsLoading(true);
      ResumeManager.postJob(job)
        .then(() => props.history.push("/resume"));
    }
  };

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <div className="listingHeader">
        <div className="jobListing__header">
          <h2>Add Work History</h2>
        </div> 
      </div>
      <section className="editJobListing">
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
            />
            
            <label 
              className="editLabel" 
              htmlFor="company">
                Company *
            </label>
            <input 
              type="text"
              required
              className="editInput"  
              onChange={handleFieldChange}
              id="company"
            />

            <div className="dateFields">
              <div className="start1">
                <label 
                  className="editLabel" 
                  htmlFor="startMonth">
                    Start Month *
                </label>
                <input 
                  type="text"
                  className="editInput"  
                  onChange={handleFieldChange}
                  id="startMonth"
                />
              </div>
              <div className="start2">
                <label 
                  className="editLabel" 
                  htmlFor="startYear">
                    Start Year *
                </label>
                <input 
                  type="number"
                  className="editInput"  
                  onChange={handleFieldChange}
                  id="startYear"
                />
              </div>
            </div>

            <div className="dateFields">
              <div className="end1">
                <label 
                  className="editLabel" 
                  htmlFor="endMonth">
                    End Month
                </label>
                <input 
                  type="text"
                  className="editInput"  
                  onChange={handleFieldChange}
                  id="endMonth"
                />
              </div>
              <div className="end2">
                <label 
                  className="editLabel" 
                  htmlFor="endYear">
                    End year
                </label>
                <input 
                  type="number"
                  className="editInput"  
                  onChange={handleFieldChange}
                  id="endYear"
                />
              </div>
            </div>

            <input 
              type="checkbox"
              className="editInputs"  
              onChange={checkBoxValue}
              checked={isChecked}
              // value={job.current}
              id="current"
            />
            <label 
              className="editLabel" 
              htmlFor="current">
                I am currently employed here.
            </label>
            <br />
            <br />

            <label 
              className="editLabel" 
              htmlFor="description">
                Job Description *
            </label>
            <textarea 
              type="text"
              required
              className="editInputTextarea"  
              onChange={handleFieldChange}
              id="description"
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
          onClick={createJob}>
            Save
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default WorkHistory