import React, { useState } from "react"
import LoginManager from "../modules/LoginManager";
import { Link } from "react-router-dom";


const Login = props => {

  const [credentials, setCredentials] = useState({email: "", password: ""});
  
  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials};
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);   
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    LoginManager.getAll()
    .then(users => {
      users.find(user => {
        if (user.email === email && user.password === password) {
          sessionStorage.setItem('user', JSON.stringify(user))
          setCredentials(user);
        } 
      })
    })
    .then(()=>props.history.push("/discovery"))
  }

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="./statusbar.png" alt="status"/>
      </div>
      <div className="backButton">
        <Link className="nav-link" to="/">
          <button type="submit" className="backbutton">
            <img src="./backarrow.png" alt="back" />
          </button>
        </Link>
      </div>
      <main className="loginContainer">
        <h1 className="loginHeader">Login</h1>       

        <form className="loginForm" onSubmit={handleLogin}>

          <div className="form-input">
            <input onChange={handleFieldChange} 
              className="inputField" 
              type="text" 
              id="email" 
              placeholder="Email" />
          </div>

          <div className="form-input">
            <input onChange={handleFieldChange}
              className="inputField" 
              type="password" 
              id="password" 
              placeholder="Password" />
          </div>

          <div className="container-login-form-btn">
            <div className="wrap-login-form-btn">
              <div className="login-form-btn"></div>
              <button type="submit" className="loginBtn">
                Login
              </button>
            </div>
          </div>
        </form>
      </main>
    </React.Fragment>
            
  );
  };

export default Login;