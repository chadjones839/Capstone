/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navbar from "../nav/Navbar.jsx"
import UserManager from "../modules/UserManager";

/*END IMPORTS*****************************************************************/

const UserResume = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  const [user, setUser] = useState({})
  // const [job, setJob] = useState({
  //   userId: "",
  //   jobTitle: "",
  //   jobLocation: "",
  //   salaryEstLow: "",
  //   salaryEstHigh: "",
  //   salaryActual: "",
  //   requirements: "",
  //   jobSummary: "",
  // });

  useEffect(() => {
    // JobManager.getJob(props.jobId)
    //   .then(job => {
    //     setJob({
    //       userId: job.userId,
    //       jobTitle: job.jobTitle,
    //       jobLocation: job.jobLocation,
    //       salaryEstLow: job.salaryEstLow,
    //       salaryEstHigh: job.salaryEstHigh,
    //       salaryActual: job.salaryActual,
    //       requirements: job.requirements,
    //       jobSummary: job.jobSummary,
    //     });
        UserManager.getUser(sessionUser.id)
        .then((response) => {
          setUser(response)
        // })
      });
  }, []);

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <section className="profileHeader">
        <div className="logoutButton">
      
        </div>
        <div className="userProfile__image">
          <div className="userImage__container">
            <img src={user.image} alt={user.firstName} />
          </div>
        </div>
        <div className="userProfile__right">
        </div>
      </section>
      <section className="userProfile__details">
          <div className="userProfile__name">
            <h2>{user.firstName} {user.lastName}</h2>
          </div>
          <div className="userProfile__location">
          {user.jobTitle}
          </div>
        </section>
        <main className="resumeContainer">
          <section className="editProfileButton">
            <div className="editBtnContainer">
              <button 
                // onClick={() => props.history.push(`/users/${user.id}/edit`)}
                className="viewResBtn"
                type="button"
                >
                  View Resume
              </button>
            </div>
          </section>

          <h2 className="sectionTitle">Work History</h2>
          <section className="workHistory">


            <div className="addWorkHistory">
              <button 
                onClick={() => props.history.push(`/work-history/new`)}
                className="addButton"
                type="button"
                >
                  + Add Job
              </button>
            </div>
          </section>

          <h2 className="sectionTitle">Skills</h2>
          <section className="skills">


            <div className="addSkills">
              <button 
                onClick={() => props.history.push(`/skills/new`)}
                className="addButton"
                type="button"
                >
                  + Add Skill
              </button>
            </div>
          </section>

          <h2 className="sectionTitle">Schools</h2>
          <section className="schools">


            <div className="addWorkHistory">
              <button 
                onClick={() => props.history.push(`/schools/new`)}
                className="addButton"
                type="button"
                >
                  + Add School
              </button>
            </div>
          </section>
        </main>
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

export default UserResume;