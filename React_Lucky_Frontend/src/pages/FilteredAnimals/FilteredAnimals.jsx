import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./FilteredAnimals.scss";

import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import Arrow from "../../assets/Buscador/flechaatras.png";
import { UserContext } from "../../shared/contexts/UserContext";
import favoritos from "../../assets/PerfilAnimales/favoritos.png"
import Gallery from "../../shared/components/Gallery/Gallery";
import Card from "../../shared/components/Card/Card";

function FilteredAnimals(props) {

    const filter = JSON.parse(localStorage.getItem('mascotaFiltrada'));
    const {mascotas, onSearch} = useContext(UserContext);

    
    console.log(filter);

    return (
        <section className="c-filtradosPage">
            <div className="c-filtradosPage-search">
                <Link className="c-link" to="/filtro">
                <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
                </Link>                
                <input type="text" className="c-filtradosPage-search__input" placeholder="Buscar" onChange={onSearch} />
                <img className="c-filtradosPage-search__logo" src={SearchLogo} alt="lupa" />
                <Link className="c-link" to="/filtro">
                  <img className="c-filtradosPage-filter__img" src={Filter} alt="filter" />
                </Link>
            </div>
            <div className="c-filtradosPage-filtered">   
                {/*<Gallery mascotas ={mascotas}>*/}
                    {filter && filter.map((mascota, i) =>     
                        <div key={i}>
                                    {mascotas.map((mascota) => (
                                        <Card key={mascota._id} mascota={mascota} />
                                    ))}
                        </div>
                    )}
                {/*</Gallery>*/}
            </div>
        </section>
      );
};

export default FilteredAnimals;