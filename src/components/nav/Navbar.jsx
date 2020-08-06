import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));

  return (
    <nav>
      <ul className="navContainer">
        <li>
          <Link className="nav-link" to="/profile"> 
            <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596490031/icons/profileNav_lord6y.png" alt="profile" />
          </Link>
        </li>
        <li>
          {sessionUser.accountType === "employer"
          ? <Link className="nav-link" to="/jobs"> 
              <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596585155/icons/suitcase_x8vwp8.png
              " alt="jobs" /> 
          </Link>
          : <Link className="nav-link" to="/companies"> 
          <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596585155/icons/suitcase_x8vwp8.png
          " alt="jobs" /> 
      </Link> }
        </li>
        <li>
          <Link className="nav-link" to="/discovery"> 
            <button type="submit" className="discoveryNavButton">
              &#10009;
            </button> 
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/resumes"> 
            <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596585153/icons/resume_pqehbk.png" alt="resume" />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/chat"> 
            <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596490014/icons/chatNav_l7v2l2.png" alt="chat" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;