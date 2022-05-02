import React from "react";
import arrow from "../../../assets/Buscador/flechaatras.png";
import Protectora from "../Protectora/Protectora";

const Resumen = ({ mascotaDetail }) => {
  return (
    <>
      <div className="c-estado-adopcionDetail">
        <div className="c-estado-adopcionDetail__top">
          <p className="c-estado-adopcionDetail__top__p">Adopción de {mascotaDetail.nombre}</p>
          <img className="c-estado-adopcionDetail__top__arrow" src={arrow} alt="" />
        </div>
        <div className="c-estado-adopcionDetail__bottom">
          <div className="c-estado-adopcionDetail__bottom__left">
            <img className="c-estado-adopcionDetail__bottom__left__img" src={mascotaDetail.imagen} alt="imagen del animalito" />
          </div>
          <div className="c-estado-adopcionDetail__bottom__right">
            <p className="c-estado-adopcionDetail__bottom__right__p">Nombre: {mascotaDetail.nombre}</p>
            <p className="c-estado-adopcionDetail__bottom__right__p">Ciudad: {mascotaDetail.ciudad}</p>
            <p className="c-estado-adopcionDetail__bottom__right__p">Sexo: {mascotaDetail.sexo}</p>
          </div>
        </div>
      </div>
      <div>
        <Protectora />
      </div>
    </>
  );
};

export default Resumen;
