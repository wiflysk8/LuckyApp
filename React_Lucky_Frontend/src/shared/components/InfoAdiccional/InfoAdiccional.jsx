import React from "react";
import "./InfoAdiccional.scss";
import Galeria from "../../../assets/Protectora/fotos.png";
import Info from "../../../assets/Perfil/ayudarosa.png";
import FlechaDown from "../../../assets/Filtros/down-arrow.png";

const InfoAdiccional = ({ mascotaDetail }) => {
  return (
    <div className="c-infoAdiccional">
      <div className="c-infoAdiccional__box c-infoAdiccional__line">
        <div>
          <h3 className="c-infoAdiccional__box__text">Subir imágenes</h3>
        </div>
        <div>
          <p className="c-infoAdiccional__box__littleText">Necesitamos que nos subas algunas fotos de dónde va a vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información</p>
        </div>
        <div className="c-infoAdiccional__box__imgBox">
          <img className="c-infoAdiccional__box__img" src={Galeria} alt="" />
        </div>
      </div>

      <div className="c-infoAdiccional__box">
        <div>
          <h3 className="c-infoAdiccional__box__text c-infoAdiccional__box__text--mod">¿Cómo quieres pagar las tasas?</h3>
        </div>
        <div>
          <p className="c-infoAdiccional__box__littleText">Para pagar las tasas de adopción puedes elegir o pagarlo mediante la app con un pago único o poniéndose en contacto con la protectora para fraccionar el pago</p>
        </div>
        <div></div>
        <div className="c-profile-top__button c-infoAdiccional__box--mod">
          <div className="c-profile-top__button__left">
            <p className="c-profile-top__button__p">
              {mascotaDetail.tasa} € <span className="c-infoAdiccional__box__span">Desglosar las tasas</span>
            </p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-infoAdiccional__box__flecha" src={FlechaDown} alt="icon" />
          </div>
        </div>
        <div className="c-infoAdiccional__box__checkboxes">
          <div className="c-infoAdiccional__box__checkboxes__solo">
            <input className="c-infoAdiccional__box__checkboxes__solo__checkbox" type="checkbox" />
            <p>Pagar a través de la aplicación</p>
            <img className="c-infoAdiccional__box__checkboxes__solo__img" src={Info} alt="" />
          </div>
        </div>
      </div>
      <div className="c-adopcionSection__btn c-infoAdiccional__btn__margin">
        <button className="btn__1 btn__adoptionSection">Enviar</button>
      </div>
    </div>
  );
};

export default InfoAdiccional;
