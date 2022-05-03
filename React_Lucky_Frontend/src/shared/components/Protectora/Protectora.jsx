import React from "react";
import "./Protectora.scss";
import ProtectoraImg from "../../../assets/Protectora/protectora.png";
import MapImg from "../../../assets/Protectora/map.png";
import googleImg from "../../../assets/Protectora/googlemaps.png";

const Protectora = () => {
  return (
    <>
      <div className="c-protectora">
        <div className="c-protectora__info">
          <img className="c-protectora__info__img" src={ProtectoraImg} alt="protectora" />
          <div className="c-protectora__info__title">
            <h3 className="c-protectora__info__title__h3">Asiociación Protectora LARA</h3>
            <div className="c-protectora__info__title__bottom">
              <img className="c-protectora__info__map" src={MapImg} alt="protectora" />
              <p className="c-protectora__info__title__bottom__p">Calle de Eraso 14, Madrid</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-googlemaps">
        <img className="c-googlemaps__img" src={googleImg} alt="" />
      </div>
    </>
  );
};

export default Protectora;
