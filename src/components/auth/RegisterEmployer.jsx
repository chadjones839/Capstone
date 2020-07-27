import React, {useState} from "react";
import LoginManager from "../modules/LoginManager";


const RegisterCandidate = props => {
  const [user, setUser] = useState({
    email:"", 
    password:"", 
    accountType: "employer",
    image: "companyicon.png",
    discoverCandidates: true,
    discoverEmployers: false, 
    companyName: "",
    industry: "",
    userLocation: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    bio: ""
    })

  const [isLoading, setIsLoading]= useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const constructNewUser = evt => {
    evt.preventDefault();
    let password2= document.querySelector("#password2").value
    if (user.email === "" || user.password === "") {
      window.alert("Please fill all fields out before creating a new account")
    } 
    else if (user.password !== password2) {
      window.alert("Your password does not match")
    } 
    else {
      setIsLoading(true);
      sessionStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      LoginManager.postUser(user)
      .then(()=>props.history.push("/discovery"));
    }
  };

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="./statusbar.png" alt="status"/>
      </div>
      <main className="registerContainer">
        <h1 className="registerHeader">Type of Account</h1>
          <div className="registerBox">
            <form>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="email"
                  type="text"
                  placeholder="Email"  
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  type="password"
                  id="password"  
                  placeholder="Password"
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  type="password" 
                  placeholder="Confirm Password"
                  id="password2" />
              </div>

              <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <div className="login-form-bgbtn"></div>
                  <button type="submit" className="createAcctBtn" disabled={isLoading}
                  onClick={constructNewUser}>
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
      </main>
    </React.Fragment>
  );
};

export default RegisterCandidate;