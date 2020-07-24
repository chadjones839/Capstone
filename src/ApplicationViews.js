import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./components/auth/Home.jsx";
import Register from "./components/auth/Register.jsx";
import RegisterEmployer from "./components/auth/RegisterEmployer.jsx";
import Login from "./components/auth/Login.jsx";

import EmployerDiscovery from "./components/discovery/EmployerDiscoveryList.jsx";
import EmployerProfileCard from "./components/profile/EmployerProfileCard.jsx";
import Chat from "./components/chat/ChatList.jsx";

const ApplicationViews = (props) => {

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
        path="/login" 
        render={props => {
          return <Login setUser={setUser} {...props} />
      }} 
      />
      <Route 
        exact
        path="/profile" 
        render={props => {
          if (hasUser) {
            return <EmployerProfileCard {...props} />
          }
          else {
            return <Redirect to="/" />
          }
      }} 
      />
      
      <Route 
        exact
        path="/discovery" 
        render={props => {
          if (hasUser) {
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
    </React.Fragment>
  )
}


export default ApplicationViews