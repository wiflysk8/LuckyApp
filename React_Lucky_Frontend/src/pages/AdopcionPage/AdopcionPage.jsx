import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../shared/components/Nav/Nav";
import "./AdopcionPage.scss";
import Gallery from "../../shared/components/Gallery/Gallery";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Arrow from "../../assets/Perfil/arrow.png";
import TemporalImg from "../../assets/Estados/temp.png";
import Filter from "../../assets/Buscador/filtro.png";
import AnimalsFilter from "../../shared/components/AnimalsFilter/AnimalsFilter";

const AdopcionPage = () => {
  const [mascotas, setMascotas] = useState([]);
  const [filteredMascotas, setFilteredMascotas] = useState([]);

  useEffect(() => {
    const getMascotas = async () => {
      const res = await axios.get("https://luismrtinez.com/mascotas");
      setMascotas(res.data);
      setFilteredMascotas(res.data);
    };

    getMascotas();
  }, []);

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  const onFilter = (inputValue) => {
    let filteredMascota = filteredMascotas.filter((mascota) => {
      if (mascota.especie.toLowerCase().includes(inputValue.toLowerCase()) || mascota.nombre.toLowerCase().includes(inputValue.toLowerCase())) {
        return mascota;
      }
      return false;
    });
    setMascotas(filteredMascota);
  };

  return (
    <section className="c-adopcion">
      <div className="c-adopcion-search">
        <input type="text" className="c-adopcion-search__input" placeholder="Buscar" onChange={onSearch} />
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
      <div className="c-adopcion-filter">
        <h3 className="c-adopcion-filter__h3">Animales en adopción</h3>
        <img className="c-adopcion-filter__img" src={Filter} alt="filter" onClick={AnimalsFilter} />
        
      </div>
      <Gallery mascotas={mascotas} />

      <Nav />
    </section>
  );
};

export default AdopcionPage;
