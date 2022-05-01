import React, { useEffect, useState } from "react";
import "./LandingPage.scss";
import logo from "../../../assets/Logotipo/logotipo.png";
import title from "../../../assets/Logotipo/tituloLucky.png";
import Slider from "../Slider/Slider";

const LandingPage = () => {
  const [landing, setLanding] = useState(true);

  const landingOut = () => {
    setTimeout(() => {
      setLanding(false);
    }, 2000);
  };

  useEffect(() => {
    landingOut();
  });

  return (
    <>
      {landing ? (
        <div className="c-landing">
          <img className="c-landing__logo" src={logo} alt="logo" />
          <img className="c-landing__title" src={title} alt="title" />
        </div>
      ) : (
        <Slider />
      )}
    </>
  );
};

export default LandingPage;
