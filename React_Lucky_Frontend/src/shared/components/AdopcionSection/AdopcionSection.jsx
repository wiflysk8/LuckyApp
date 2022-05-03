import React from "react";
import "./AdopcionSection.scss";
import Map2 from "../../../assets/Protectora/map2.png";
import FlechaDown from "../../../assets/Filtros/down-arrow.png";
import CustomPopup from "../CustomPopup/CustomPopup";
import PopDetalle from "../PopDetalle/PopDetalle";
import { useState } from "react";

const AdopcionSection = ({ mascotaDetail }) => {

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
      setVisibility(e);
    };

  return (
    <div>
      <div className="c-adopcionSection">
        <div className="c-adopcionSection__bottomline">
          <div>
            <h2 className="c-adopcionSection__text">Dirección</h2>
          </div>
          <img className="c-adopcionSection__img" src={Map2} alt="protectora" />
        </div>
        <div>
          <div>
            <h2 className="c-adopcionSection__text">Día</h2>
          </div>
          <div>
            <input type="date" className="c-adopcionSection__calendar" />
          </div>
        </div>
        <div>
          <div>
            <h3 className="c-adopcionSection__text">Hora</h3>
          </div>
          <div>
            <input className="c-adopcionSection__select" type="select" placeholder="¿A qué hora puedes venir?" />
            <img className="c-adopcionSection__select__img" src={FlechaDown} alt="icon" />
          </div>
        </div>
        <div className="c-adopcionSection__btn">
          <button onClick={(e) => {
              setVisibility(!visibility);
              e.preventDefault();
            }}
            className="btn__1 btn__adoptionSection">Enviar</button>
            <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
            <PopDetalle />
          </CustomPopup>
        </div>
      </div>
    </div>
  );
};

export default AdopcionSection;
