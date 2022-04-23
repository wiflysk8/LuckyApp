import React from "react";
import "./Card.scss";

const Card = ({ mascota }) => {
  return (
    <div className="c-card">
      <img className="c-card__img" src={mascota.imagen} alt={mascota.nombre} />
      <div className="c-card__footer">
        <h3 className="c-card__name">{mascota.nombre}</h3>
        <div className="c-card__footer-right">
          <p className="c-card__footer-right__p">{mascota.ciudad}</p>
          <p className="c-card__footer-right__p c-card__footer-right__p--right">{mascota.peso}Km</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
