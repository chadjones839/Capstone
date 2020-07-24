import React from "react"
import { Link } from "react-router-dom";


const Home = props => {

  return (
    <div className="limiter">
      <div className="loginBoxContainer">
        <div className ="loginImages">
          <div className ="loginMain">
            <img src="./techBack.jpg" alt="logo" />
            <div className ="loginLogo">
              <div className="logoContainer">
                <img src="./techtok.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="loginBox">
          <div className="authButtons">
            <div className="loginButton">
            <Link className="nav-link" to="/login"> 
              <button type="submit" className="login-btn">
                Login
              </button>
            </Link>
            </div>
            <div className="registerButton">
              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>     
  );
  };

export default Home;