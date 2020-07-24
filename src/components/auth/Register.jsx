import React from "react"
import { Link } from "react-router-dom";


const Register = props => {

  return (
    <main className="registerContainer">
      <h1>Type of Account</h1>
          <div className="typeButtons">
            <div className="candidateButton">
              <Link to="/login"> 
                <button type="submit" className="reg-candidateBtn">
                  Looking for Work
                </button>
              </Link>
            </div>
            <div className="employerButton">
              <Link className="nav-link" to="/register-employer">
                <button type="submit" className="reg-employerBtn">
                  Looking for Talent
                </button>
              </Link>
            </div>

      </div>
    </main>     
  );
  };

export default Register;