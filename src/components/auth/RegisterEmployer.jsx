/* eslint-disable array-callback-return */
import React, {useState} from "react";
import UserManager from "../modules/UserManager";


const RegisterCandidate = props => {
  const [user, setUser] = useState({
    email:"", 
    password:"", 
    accountType: "employer",
    image: "https://res.cloudinary.com/dhduglm4j/image/upload/v1596490031/icons/profileNav_lord6y.png",
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
    let passwordConfirm= document.querySelector("#passwordConfirm").value
    if (user.email === "" || user.password === "" || user.companyName === "" || user.industry === "" || user.userLocation === "") {
      window.alert("Missing fields")
    } 
    else if (user.password !== passwordConfirm) {
      window.alert("Your password does not match")
    } 
    else {
      setIsLoading(true);
      sessionStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      UserManager.postUser(user)
      .then(() =>{
        UserManager.getAllUsers()
        .then(arr => {
          arr.find(obj => {
            if (obj.email === user.email) {
              sessionStorage.setItem("user", JSON.stringify(obj))
            }
          })
        })
      })
      .then(()=> {
        props.history.push("/discovery")
      })
      .then(() => {
        window.location.reload(true)
      })
    }
  };

  return (
    <React.Fragment>
      <div className="statusBar">
        <img src="http://res.cloudinary.com/dhduglm4j/image/upload/v1596490037/icons/statusbar_ix00oi.png" alt="status"/>
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
                  id="passwordConfirm" />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="companyName"
                  type="text"
                  placeholder="Company Name"  
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="userLocation"
                  type="text"
                  placeholder="Location (i.e. Nashville, TN)"  
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="industry"
                  type="text"
                  placeholder="Company Industry"  
                  onChange={handleFieldChange} />
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