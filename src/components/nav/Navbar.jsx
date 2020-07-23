import React from "react";
// import { withRouter } from 'react-router-dom';
import { Link} from "react-router-dom";

const NavBar = props => {

  return (
    <nav>
      <ul className="navContainer">
        <li>
          <Link className="nav-link" to="/profile"> 
            <img src="./profileNav.png" alt="profile" />
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/"> 
            <button type="submit" className="discoveryNavButton">
              +
            </button> 
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/chat"> 
            <img src="./chatNav.png" alt="chat" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;