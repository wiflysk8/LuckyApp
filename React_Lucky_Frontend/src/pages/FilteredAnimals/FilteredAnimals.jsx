import React, { useContext } from "react";
import Gallery from "../../shared/components/Gallery/Gallery";
import { Link } from "react-router-dom";
import "./FilteredAnimals.scss";

import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import Arrow from "../../assets/Buscador/flechaatras.png";
import { UserContext } from "../../shared/contexts/UserContext";
import { useContext } from "react";

const FilteredAnimals = () => {

    const {mascotas, onSearch} = useContext(UserContext);

    const filter = JSON.parse(localStorage.getItem('mascotaFiltrada'));

    return (
        <section className="c-filtradosPage">
            <div className="c-filtradosPage-search">
                <Link className="c-link" to="/adopcion">
                <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
                </Link>                
                <input type="text" className="c-filtradosPage-search__input" placeholder="Buscar" onChange={onSearch} />
                <img className="c-filtradosPage-search__logo" src={SearchLogo} alt="lupa" />
                <Link className="c-link" to="/filtro">
                  <img className="c-filtradosPage-filter__img" src={Filter} alt="filter" />
                </Link>
                <div className="c-filtradosPage-filtered">
                    
                    {filter && filter.map((mascotas, i) => 
                    
                    <div key={i}>

                        <Gallery mascotas={mascotas}></Gallery>

                    </div>

                    )}
                <Gallery mascotas={mascotas}></Gallery>
                </div>
            </div>
        </section>
      );
};

export default FilteredAnimals;