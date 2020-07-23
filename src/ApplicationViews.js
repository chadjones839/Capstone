import React from "react";
import { Route, Redirect } from "react-router-dom";

import Discovery from "./components/discovery/Discovery.jsx";
import Profile from "./components/profile/Profile.jsx";
import Chat from "./components/chat/Chat.jsx";

const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route path="/" render={props => {
          return <Discovery {...props} />
      }} />
      <Route path="/profile" render={props => {
          return <Profile {...props} />
      }} />
      <Route path="/chat" render={props => {
          return <Chat {...props} />
      }} />
    </React.Fragment>
  )
}


export default ApplicationViews