import React from "react"

const Register = props => {

  return (
    <>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
      </div>
      <div className="backButton">
        <button 
          type="submit" 
          className="backbutton"
          onClick={()=> props.history.push("/")}>
            <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596490014/icons/backarrow_lfdpzw.png" className="backToHome" alt="back" />
        </button>
      </div>
      <main className="registerContainer">
        <h1>I am...</h1>
        <br />
        <br />
        <div className="typeButtons">
          <div className="candidateButton">
            <button 
            type="submit" 
            className="reg-candidateBtn"
            onClick={()=> props.history.push("/register-candidate")}>
              Looking for Work
            </button>
          </div>
          <br />
          <div className="employerButton">
            <button 
              type="submit" 
              className="reg-employerBtn"
              onClick={()=> props.history.push("/register-employer")}>
                Looking for Talent
            </button>
          </div>
        </div>
      </main>    
    </> 
  );
  };

export default Register;