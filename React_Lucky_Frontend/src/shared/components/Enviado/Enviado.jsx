import React from "react";
import "./Enviado.scss";
import foto2 from "../../../assets/Alerts/alert2.png";
import { Link } from "react-router-dom";
import Cross from "../../../assets/Sliders/X.png";
const Enviado = () => {
  return (
    <div className="c-enviado">
      <Link to="/estado">
        <img className="c-enviado__x" src={Cross} alt="cross" />
      </Link>
      <h1 className="c-enviado__title">¡Enviado!</h1>
      <p className="c-enviado__texto">Hemos enviado tu formulario a la protectora. Si quieres ponerte en contacto con ellos puedes hacerlo vía email o whatsapp</p>
      <p className="c-enviado__texto">Recuerda que la protectora se pondrá en contacto contigo para poder hacer la entrevista personal</p>
      <img className="c-enviado__img" src={foto2} alt="" />
    </div>
  );
};

export default Enviado;
