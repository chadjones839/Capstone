import React, { useState, useEffect } from 'react';
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
      school.endMonth=""
      school.endYear=""
      document.querySelector("#endDateFields").style.display = "none"
      setIsChecked(true);
    }
    else {
      school.current = false
      document.querySelector("#endDateFields").style.display = "flex"
      setIsChecked(false)
    }
  }


  const handleFieldChange = evt => {
    const stateToChange = { ...school };
    stateToChange[evt.target.id] = evt.target.value;
    setSchool(stateToChange);
  };

  const updateSchool = event => {
    event.preventDefault();
    setIsLoading(true)

  const editedSchool = {
    userId: sessionUser.id,
    schoolName: school.schoolName,
    field: school.field,
    degree: school.degree,
    startMonth: school.startMonth,
    startYear: school.startYear,
    endMonth: school.endMonth,
    endYear: school.endYear,
    current: isChecked,
    id: props.match.params.schoolId
  }

  ResumeManager.editSchool(editedSchool)
    .then(() => {
      props.history.push("/resume")
    })
  }

  useEffect(() => {
    ResumeManager.getSchool(props.match.params.schoolId)
    .then((school) => {
        setSchool(school)
        setIsLoading(false)
    } )    
}, [props.match.params.schoolId]);

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
              value={school.schoolName}
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
              value={school.field}
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
              value={school.degree}
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
                  value={school.startMonth}
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
                  value={school.startYear}
                />
              </div>
            </div>

            <div className="dateFields" id="endDateFields">
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
                  value={school.endMonth}
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
                  value={school.endYear}
                />
              </div>
            </div>

            <input 
              type="checkbox"
              className="editInputs"  
              onChange={checkBoxValue}
              checked={isChecked}
              id="current"
              value={school.current}
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
          onClick={updateSchool}>
            Save
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default SchoolForm