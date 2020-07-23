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
        
        <section className="employerCard">
          <div className="employerCard__image">
            <img src="./abstergo.jpg" alt="abstergo" className="employerCard__logo"/>
          </div>
          <div className="employerDetails">
            <h2 className="employerCard__name">Abstergo Industries</h2>
            <h4 className="employerCard__industry">World Domination</h4>
          </div>
          <div className="employerCard__body">
            <p>The destruction of the Assassin Order, the procurement of advanced technologies originally created by the First Civilization, and establishing a New World Order is our primary goal.</p>
            <p>Then on Fridays, we have our Hawaiian shirt days. If you want to you can go ahead and wear a Hawaiian shirt and jeans.
            </p>
            <p>I'm baby pickled jianbing gochujang migas blog food truck DIY viral lyft single-origin coffee chambray helvetica marfa activated charcoal franzen. Godard vaporware mixtape fingerstache irony four dollar toast, brooklyn wolf try-hard shaman cronut roof party prism. Iceland squid plaid hashtag, narwhal affogato vape art party poke salvia messenger bag organic. Skateboard air plant kinfolk biodiesel you probably haven't heard of them retro pug. Taxidermy brooklyn 8-bit DIY. Church-key distillery actually, palo santo stumptown adaptogen polaroid pitchfork.</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

      </main>

      <section className="interestButtons">
          <div className="interestButtons__container">
            <div className="interestBtn__false">
              <button type="submit" className="interestBtn">
                <img src="./X-icon.png" alt="profile" />
              </button> 
            </div>
            <div className="interestBtn__true">
              <button type="submit" className="interestBtn">
                <img src="./check-icon.png" alt="profile" />
              </button> 
            </div>
          </div>
        </section>

      <div className="navpanel">
        <Navbar />
      </div>
    </>
  );
};

export default Discovery;