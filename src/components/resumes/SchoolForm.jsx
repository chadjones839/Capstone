import React, { useState } from 'react';
import ResumeManager from '../modules/ResumeManager';

const SchoolForm = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [school, setSchool] = useState({
    userId: sessionUser.id,
    schoolName: "",
    field: "",
    degree: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    current: isChecked
  });

  const checkBoxValue = evt => {
    if (!isChecked) {
      school.current= true
      setIsChecked(true);
    }
    else {
      school.current = false
      setIsChecked(false)
    }
  }


  const handleFieldChange = evt => {
    const stateToChange = { ...school };
    stateToChange[evt.target.id] = evt.target.value;
    setSchool(stateToChange);
  };

  const createSchool = evt => {
    evt.preventDefault();
    if (school.schoolName === "" || school.startMonth === "" || school.startYear === "") {
      window.alert("Hold up boss, you're missing a field or two!");
    } else {
      setIsLoading(true);
      ResumeManager.postSchool(school)
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
          <h2>Add School</h2>
        </div> 
      </div>
      <section className="editJobListing">
        <form className="editProfileForm">
          <fieldset className="editJobDetails">
            
            <label 
              className="editLabel" 
              htmlFor="schoolName">
                School Name *
            </label>
            <input 
              type="text"
              required
              className="editInput"  
              onChange={handleFieldChange}
              id="schoolName"
            />
            
            <label 
              className="editLabel" 
              htmlFor="field">
                Field
            </label>
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="field"
            />

            <label 
              className="editLabel" 
              htmlFor="degree">
                Degree
            </label>
            <input
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="degree"
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
              id="current"
            />
            <label 
              className="editLabel" 
              htmlFor="current">
                I am currently a student here.
            </label>
            <br />
            <br />

          </fieldset>
        </form>
      </section>
      <div className="saveEditChanges">
        <button
          type="button"
          className="blackBtn"
          id="submitBtn"
          disabled={isLoading}
          onClick={createSchool}>
            Save
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default SchoolForm