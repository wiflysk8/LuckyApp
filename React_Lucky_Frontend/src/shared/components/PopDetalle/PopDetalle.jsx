import "./PopDetalle.scss";
import React from "react";
import alert3 from "../../../assets/Alerts/alert3.png";
import { Link } from "react-router-dom";
import Cross from "../../../assets/Sliders/X.png";
const PopDetalle = () => {
    return (
        <div className="c-popdetalle">
            <Link to="/estado">
                <img className="c-popdetalle__x" src={Cross} alt="cross" />
            </Link>
            <h1 className="c-popdetalle__title">¡Enviado!</h1>
            <p className="c-popdetalle__text">Ya hemos enviado toda la info a la protectora</p>
            <p className="c-popdetalle__text">Recuerda que puedes ponerte en contacto con ellos en cualquier momento si necesitas cambiar algo</p>
            <img className="c-popdetalle__img" src={alert3} alt="alert3" />
        </div>
    )
}

export default PopDetalle;
