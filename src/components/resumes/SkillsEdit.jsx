import React, { useState, useEffect } from 'react';
import ResumeManager from '../modules/ResumeManager';

const SkillsEdit = props => {

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
  console.log(props.match.params.skillId)
  const handleFieldChange = evt => {
    const stateToChange = { ...skill };
    stateToChange[evt.target.id] = evt.target.value;
    setSkill(stateToChange);
  };

  const updateSkills = evt => {
    evt.preventDefault();
    setIsLoading(true);
    const editedSkill = {
      userId: sessionUser.id,
      skill1: skill.skill1,
      skill2: skill.skill2,
      skill3: skill.skill3,
      skill4: skill.skill4,
      skill5: skill.skill5,
      id: props.match.params.skillId
    };
    
    ResumeManager.editSkill(editedSkill)
      .then(() => props.history.push("/resume"));
  };

  useEffect(() => {
    ResumeManager.getSkill(props.match.params.skillId)
    .then((skill) => {
        setSkill(skill)
        setIsLoading(false)
    } )    
}, [props.match.params.skillId]);

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
              value={skill.skill1}
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill2"
              value={skill.skill2}
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill3"
              value={skill.skill3}
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill4"
              value={skill.skill4}
            />
            <input 
              type="text"
              className="editInput"  
              onChange={handleFieldChange}
              id="skill5"
              value={skill.skill5}
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
          onClick={updateSkills}>
            Save
        </button> 
      </div>
    </React.Fragment>
  )   
};

export default SkillsEdit