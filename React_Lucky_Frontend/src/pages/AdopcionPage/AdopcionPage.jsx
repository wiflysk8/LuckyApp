import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../shared/components/Nav/Nav";
import "./AdopcionPage.scss";
import Gallery from "../../shared/components/Gallery/Gallery";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Arrow from "../../assets/Perfil/arrow.png";
import TemporalImg from "../../assets/Estados/temp.png";

const AdopcionPage = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const getMascotas = async () => {
      const res = await axios.get("http://localhost:5000/mascotas");
      setMascotas(res.data);
    };

    getMascotas();
  }, []);

  return (
    <section className="c-adopcion">
      <div className="c-adopcion-search">
        <input type="text" className="c-adopcion-search__input" placeholder="¿Qué estás buscando?" />
        <img className="c-adopcion-search__logo" src={SearchLogo} alt="lupa" />
      </div>
      <img src={TemporalImg} alt="temp img" />
      <div className="c-adopcion__button">
        <div className="c-profile-top__button__left">
          <p className="c-profile-top__button__p">Estado de la adopción</p>
        </div>
        <div className="c-profile-top__button__right">
          <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
        </div>
      </div>
      <h3 className="c-adopcion__h3">Animales en adopción</h3>
      <Gallery mascotas={mascotas} />

      <Nav />
    </section>
  );
};

export default AdopcionPage;
