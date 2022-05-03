/* eslint-disable array-callback-return */
import "./Adopcion.scss";
import Info from "../../../assets/Perfil/ayudarosa.png";
import { useContext, useState } from "react";
import CustomPopup from "../CustomPopup/CustomPopup";
import Advertencia from "../Advertencia/Advertencia";
import AlreadyAdopted from "../AlreadyAdopted/AlreadyAdopted";
import { UserContext } from "../../contexts/UserContext";

export default function Adopcion({ mascotaDetail }) {
  const [visibility, setVisibility] = useState(false);
  const [adopted, setAdopted] = useState(false);
  const { user } = useContext(UserContext);

  const handleAdopted = () => {
    user.mascotas.map((mascota) => {
      if (mascota.id === mascotaDetail.id) {
        setAdopted(true);
      }
    });
  };

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div>
      <div className="c-adopcion-box">
        <div className="c-adopcion__bottom">
          <h4 className="c-adopcion__bottom__h4">Requisitos adopción</h4>
          <p className="c-adopcion__p">{mascotaDetail.envio}</p>
        </div>
        <div className="c-adopcion__bottom">
          <div className="c-adopcion__bottom__left">
            <h4 className="c-adopcion__bottom__h4">Tasa de adopción</h4>
            <img className="c-adopcion__bottom__img" src={Info} alt="icon" />
          </div>
          <p className="c-adopcion__p">{mascotaDetail.tasa}€ </p>
        </div>
        <div className="c-adopcion__bottom">
          <h4 className="c-adopcion__bottom__h4">¿Se envía a otra ciudad?</h4>
          <p className="c-adopcion__p"> {mascotaDetail.requisitos}</p>
        </div>
        <div className="btn">
          <button className="btn__2">Apadrinar</button>
          <button
            className="btn__1"
            onClick={(e) => {
              setVisibility(!visibility);
              handleAdopted();
            }}
          >
            Adoptar
          </button>
          <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
            {adopted ? <AlreadyAdopted /> : <Advertencia mascotaDetail={mascotaDetail} />}
          </CustomPopup>
        </div>
      </div>
    </div>
  );
}
