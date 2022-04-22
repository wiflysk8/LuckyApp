import React from "react";
import { Link } from "react-router-dom";
import welcome from "../../assets/welcomepng.png";
import Nav from "../../shared/components/Nav/Nav";

import "./WelcomePage.scss";

const WelcomePage = () => {
  return (
    <section className="c-welcome">
      <img className="c-welcome-img" src={welcome} alt="welcome" />
      <h2 className="c-welcome__title">¿Cómo quieres entrar?</h2>
      <Link className="c-welcome-link" to="/login">
        {" "}
        <button className="c-welcome__btn">Usuario</button>
        <button className="c-welcome__btn">Asociación Protectora</button>
      </Link>
      <Link className="c-welcome-link2" to="/register">
        <p className="c-welcome-p">Registrarse en otro momento</p>
      </Link>
      <Nav />
    </section>
  );
};

export default WelcomePage;
