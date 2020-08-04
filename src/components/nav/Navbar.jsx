import React from "react";
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav>
      <ul className="navContainer">
        <li>
          <Link className="nav-link" to="/profile"> 
            <img src="https://res.cloudinary.com/dhduglm4j/image/upload/v1596490031/icons/profileNav_lord6y.png" alt="profile" />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/discovery"> 
            <button type="submit" className="discoveryNavButton">
              &#10009;
            </button> 
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