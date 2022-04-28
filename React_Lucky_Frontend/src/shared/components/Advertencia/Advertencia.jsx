import React from "react";
import "./Advertencia.scss";
import foto1 from "../../../assets/Alerts/alert1.png";
import { Link } from "react-router-dom";

const Advertencia = () => {
  return (
    <div className="c-advertencia">
      <alert>
        <h1 className="c-advertencia__title">Solicitud de adopción</h1>
        <p className="c-advertencia__texto">Adoptar es un acto de amor, pero sobre todo una responsabilidad de por vida</p>
        <p className="c-advertencia__texto">Por éste motivo es importante que veas el siguiente vídeo donde te explicamos como va a ser todo el proceso de adopción</p>
        <img className="c-advertencia__img" src={foto1} alt="" />
        <h3 className="c-advertencia__subtitle">¿Quieres continuar con el proceso de adopción?</h3>
        <Link to="/adopcion">
          <button className="c-advertencia__boton">Cancelar</button>
        </Link>
        <Link to="/profile">
          <button className="c-advertencia__boton2">Continuar</button>
        </Link>
      </alert>
    </div>
  );
};

export default Advertencia;
