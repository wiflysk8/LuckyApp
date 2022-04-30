import "./Adopcion.scss";
import Info from "../../../assets/Perfil/ayudarosa.png";
import { useState } from "react";
import CustomPopup from "../CustomPopup/CustomPopup";
import Advertencia from "../Advertencia/Advertencia";

export default function Adopcion({ mascotaDetail }) {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      <div className="c-adopcion-box">
        <div className="c-adopcion__bottom">
          <h4 className="c-adopcion__bottom__h4">Requisitos adopción</h4>
          <p className="c-adopcion__p">{mascotaDetail[0].envio}</p>
        </div>
        <div className="c-adopcion__bottom">
          <div className="c-adopcion__bottom__left">
            <h4 className="c-adopcion__bottom__h4">Tasa de adopción</h4>
            <img className="c-adopcion__bottom__img" src={Info} alt="icon" />
          </div>
          <p className="c-adopcion__p">{mascotaDetail[0].tasa}€ </p>
        </div>
        <div className="c-adopcion__bottom">
          <h4 className="c-adopcion__bottom__h4">¿Se envía a otra ciudad?</h4>
          <p className="c-adopcion__p"> {mascotaDetail[0].requisitos}</p>
        </div>
        <div className="btn">
          <button className="btn__2">Apadrinar</button>
          <button className="btn__1" onClick={(e) => setVisibility(!visibility)}>
            Adoptar
          </button>
          <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
            <Advertencia mascotaDetail={mascotaDetail}/>
          </CustomPopup>
        </div>
      </div>
    </div>
  );
}
