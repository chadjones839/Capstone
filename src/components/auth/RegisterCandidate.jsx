/* eslint-disable array-callback-return */
import React, {useState} from "react";
import UserManager from "../modules/UserManager";


const RegisterEmployer = props => {

  const [user, setUser] = useState({
    email:"", 
    password:"", 
    accountType: "candidate",
    image: "https://res.cloudinary.com/dhduglm4j/image/upload/v1596490031/icons/profileNav_lord6y.png",
    companyName: "",
    industry: "default",
    userLocation: "",
    firstName: "",
    lastName: "",
    jobTitle: "default",
    bio: "default"
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
    if (user.email === "" || user.password === "" || user.firstName === "" || user.lastName === "" || user.userLocation === "") {
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
        <h1 className="registerHeader">Create Account</h1>
          <div className="registerBox">
            <form>

            <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="firstName"
                  type="text"
                  placeholder="First Name"  
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="lastName"
                  type="text"
                  placeholder="Last Name"  
                  onChange={handleFieldChange} />
              </div>

              <div className="form-input">
                <input 
                  required
                  className="inputField" 
                  id="userLocation"
                  type="text"
                  placeholder="Location (i.e. Albany, NY)"  
                  onChange={handleFieldChange} />
              </div>

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

export default RegisterEmployer;