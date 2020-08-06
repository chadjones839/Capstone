import React, { useState } from 'react';
import ResumeManager from '../modules/ResumeManager';

const SkillForm = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [isLoading, setIsLoading] = useState(false);
  const [skill, setSkill] = useState({
    userId: sessionUser.id,
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: ""
  });

  const handleFieldChange = evt => {
    const stateToChange = { ...skill };
    stateToChange[evt.target.id] = evt.target.value;
    setSkill(stateToChange);
  };

  const saveSkills = evt => {
    evt.preventDefault();
    if (skill.skill1 === "") {
      window.alert("Enter at least one skill.");
    } else {
      setIsLoading(true);
      ResumeManager.postSkill(skill)
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
          <h2>Add Skills</h2>
        </div> 
      </div>
      <section className="editJobListing">
        <form className="editProfileForm">
          <fieldset className="editJobDetails">
            
            <label 
              className="editLabel" 
              htmlFor="skills">
                Add Skills
            </label>
            <input 
              type="text"
              required
              className="editInput"  
              onChange={handleFieldChange}
              id="skill1"
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill2"
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill3"
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill4"
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill5"
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
          onClick={saveSkills}>
            Save
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default SkillForm