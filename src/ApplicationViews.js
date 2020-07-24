import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./components/auth/Home.jsx";
import Login from "./components/auth/Login.jsx";

import EmployerDiscovery from "./components/discovery/EmployerDiscoveryList.jsx";
import EmployerProfileCard from "./components/profile/EmployerProfileCard.jsx";
import Chat from "./components/chat/ChatList.jsx";

const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route 
        exact
        path="/" 
        render={props => {
          return <Home {...props} />
      }} 
      />
      <Route 
        exact
        path="/login" 
        render={props => {
          return <Login {...props} />
      }} 
      />
      <Route 
        exact
        path="/profile" 
        render={props => {
          return <EmployerProfileCard {...props} />
      }} 
      />
      
      <Route 
        exact
        path="/discovery" 
        render={props => {
          return <EmployerDiscovery {...props} />
      }} 
      />
      
      <Route 
        exact
        path="/chat" 
        render={props => {
          return <Chat {...props} />
      }} 
      />
    </React.Fragment>
  )
}


export default ApplicationViews