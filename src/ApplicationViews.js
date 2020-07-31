import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./components/auth/Home.jsx";
import Register from "./components/auth/Register.jsx";
import RegisterEmployer from "./components/auth/RegisterEmployer.jsx";
import RegisterCandidate from "./components/auth/RegisterCandidate.jsx";
import Login from "./components/auth/Login.jsx";

import EmployerDiscovery from "./components/discovery/EmployerDiscoveryList.jsx";
import CandidateDiscovery from "./components/discovery/CandidateDiscoveryList.jsx";
import EmployerProfileRender from "./components/profile/EmployerProfileRender.jsx";
import EditEmployer from "./components/profile/EditEmployerProfile.jsx";
import CandidateProfileRender from "./components/profile/CandidateProfileRender.jsx";
import EditCandidate from "./components/profile/EditCandidateProfile.jsx";
import Chat from "./components/chat/ChatList.jsx";
import MessageList from "./components/messages/MessageList.jsx";

const ApplicationViews = (props) => {

  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route 
        exact
        path="/" 
        render={props => {
          return <Home />
      }} 
      />
      <Route 
        exact
        path="/register" 
        render={props => {
          return <Register {...props} />
      }} 
      />
      <Route 
        exact
        path="/register-employer" 
        render={props => {
          return <RegisterEmployer {...props} />
      }} 
      />
      <Route 
        exact
        path="/register-candidate" 
        render={props => {
          return <RegisterCandidate {...props} />
      }} 
      />
      <Route 
        exact
        path="/login" 
        render={props => {
          return <Login setUser={setUser} {...props} />
      }} 
      />
      <Route 
        exact
        path="/profile" 
        render={props => {
          if (hasUser && sessionUser.accountType === "employer") {
            return <EmployerProfileRender {...props} />
          } 
          if (hasUser && sessionUser.accountType === "candidate") {
            return <CandidateProfileRender {...props} />
          } 
          else {
            return <Redirect to="/" />
          }
      }} 
      />
      <Route
        exact
          path="/users/:userId(\d+)/edit"
          render={props => {
            if (hasUser && sessionUser.accountType === "employer") {
              return <EditEmployer 
                {...props} 
                userId={props.match.params.userId} />
            }
            else if (hasUser && sessionUser.accountType === "candidate") {
              return <EditCandidate 
                {...props} 
                userId={props.match.params.userId} />
            } 
      }}
      />
      <Route 
        exact
        path="/discovery" 
        render={props => {
          if (hasUser && sessionUser.accountType === "employer") {
            return <CandidateDiscovery {...props} />
          } 
          if (hasUser && sessionUser.accountType === "candidate") {
            return <EmployerDiscovery {...props} />
          } 
          else {
            return <Redirect to="/" />
          }
      }} 
      />
      <Route 
        exact
        path="/chat" 
        render={props => {
          if (hasUser) {
            return <Chat {...props} />
          }
          else {
            return <Redirect to="/" />
          }
      }} 
      />
      <Route 
        exact
        path="/messages" 
        render={props => {
          if (hasUser) {
            return <MessageList {...props} />
          }
          else {
            return <Redirect to="/" />
          }
      }} 
      />
    </React.Fragment>
  )
}


export default ApplicationViews