import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar.jsx"

const Discovery = () => {
  return (
    <>
      <div className="statusBar">
        <img src="./statusbar.png" />
      </div>
      <main className="discoveryContainer">
        <h1 className="discoveryHeader">Discovery</h1>
        
      </main>
      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default Discovery;