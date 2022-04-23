import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import Map from "../../assets/Estados/map.png";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";

import "./MapPage.scss";

const MapPage = () => {
  return (
    <section className="c-map">
      <div className="c-map__div">
        <input type="text" className="c-map__input" placeholder="¿Qué estás buscando?" />
        <img className="c-map__logo" src={SearchLogo} alt="lupa" />
        <img className="c-map__logo c-map__logo--filter" src={Filter} alt="lupa" />
        <img className="c-map__img" src={Map} alt="logo" />
        <Nav />
      </div>
    </section>
  );
};

export default MapPage;
