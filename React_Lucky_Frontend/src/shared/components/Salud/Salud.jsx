/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import HuellaImg from "../../../assets/PerfilAnimales/pawprint.png";
import "./Salud.scss";
import { useState } from "react";
import CustomPopup from "../CustomPopup/CustomPopup";
import Advertencia from "../Advertencia/Advertencia";
import AlreadyAdopted from "../AlreadyAdopted/AlreadyAdopted";
import { UserContext } from "../../contexts/UserContext";

export default function Salud({ mascotaDetail }) {
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
    <div className="c-salud">
      <div className="c-salud__box">
        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Vacunado</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.vacunado}</p>
          </div>
        </div>

        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Desparasitado</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.desparasitado}</p>
          </div>
        </div>

        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Sano</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.sano}</p>
          </div>
        </div>

        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Esterilizado</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.esterilizado}</p>
          </div>
        </div>

        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Identificado</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.identificado}</p>
          </div>
        </div>
        <div className="c-salud__row">
          <div className="c-salud__row-left">
            <img src={HuellaImg} alt="pet" className="c-salud__row-left" />
            <p className="c-salud__p">Microchip</p>
          </div>
          <div className="c-salud__row-right">
            <p className="c-salud__p">{mascotaDetail.microchip}</p>
          </div>
        </div>
        <div className="c-salud__bottom">
          <h4 className="c-salud__bottom__h4">Tienes que saber que</h4>
          <p className="c-salud__p">Lorem ipsum dolor natoascepellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,{mascotaDetail.historia} </p>
        </div>
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
  );
}
