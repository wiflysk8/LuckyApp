import React, {  useContext } from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./AdopcionPage.scss";
import Gallery from "../../shared/components/Gallery/Gallery";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Arrow from "../../assets/Perfil/arrow.png";
import TemporalImg from "../../assets/Estados/temp.png";
import Filter from "../../assets/Buscador/filtro.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../shared/contexts/UserContext";
import AnimalsFilter from "../AnimalsFilter/AnimalsFilter";

const AdopcionPage = () => {
  const {mascotas, onSearch,} = useContext(UserContext);


  return (
    <section className="c-adopcionPage">
      <div className="c-adopcionPage-search">
        <input type="text" className="c-adopcionPage-search__input" placeholder="Buscar" onChange={onSearch} />
        <img className="c-adopcionPage-search__logo" src={SearchLogo} alt="lupa" />
      </div>
      <img src={TemporalImg} alt="temp img" />
      <Link className="c-Link" to="/estado"><div className="c-adopcionPage__button">
        <div className="c-profile-top__button__left">
          <p className="c-profile-top__button__p">Estado de la adopción</p>
        </div>
        <div className="c-profile-top__button__right">
          <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
        </div>
      </div>
      </Link>
      <div className="c-adopcionPage-filter">
        <h3 className="c-adopcionPage-filter__h3">Animales en adopción</h3>
        <img className="c-adopcionPage-filter__img" src={Filter} alt="filter" onClick={AnimalsFilter}/>
      </div>
      <Gallery mascotas={mascotas} />

      <Nav />
    </section>
  );
};

export default AdopcionPage;
