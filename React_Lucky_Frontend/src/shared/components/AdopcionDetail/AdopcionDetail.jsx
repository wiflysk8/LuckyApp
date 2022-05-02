import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import arrow from "../../../assets/Buscador/flechaatras.png";
import "./AdopcionDetail.scss";

const AdopcionDetail = () => {
  const [mascotaDetail, setMascotaDetail] = useState();
  let { nombre } = useParams("nombre");
  useEffect(() => {
    const getMascota = async () => {
      const res = await axios.get(`http://localhost:5000/mascotas/${nombre}`);
      setMascotaDetail(res.data);
      console.log(res.data);
    };

    getMascota();
  }, [nombre]);

  return (
    <section className="c-adopcionDetail">
      {mascotaDetail && (
        <>
          <div className="c-estado-adopcionDetail__title">
            <Link className="c-estado-adopcionDetail__link" to="/estado">
              <img className="c-estado__arrow" src={arrow} alt="flecha" />
              <p>Adopción de {mascotaDetail.nombre}</p>
            </Link>
          </div>

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
        </>
      )}
      <div className="c-estado-adopcionDetail__section2"></div>
    </section>
  );
};

export default AdopcionDetail;
