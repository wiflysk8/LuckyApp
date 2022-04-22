import React from "react";
import "./LandingPage.scss";
import logo from "../../../assets/lucky_logo.png";
import title from "../../../assets/lucky_title.png";

const LandingPage = ({ landingOut }) => {
  landingOut();
  return (
    <div className="c-landing">
      <img className="c-landing__logo" src={logo} alt="logo" />
      <img className="c-landing__title" src={title} alt="title" />
    </div>
  );
};

export default LandingPage;
