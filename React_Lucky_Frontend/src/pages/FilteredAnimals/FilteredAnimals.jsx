import { Link } from "react-router-dom";
import "./FilteredAnimals.scss";

import Filter from "../../assets/Buscador/filtro.png";
import Arrow from "../../assets/Buscador/flechaatras.png";
import Card from "../../shared/components/Card/Card";

function FilteredAnimals({ filteredData }) {
  return (
    <section className="c-filteredAnimals">
      <div className="c-filtradosPage-search">
        <Link className="c-link" to="/adopcion">
          <img className="c-filteredAnimals__arrow" src={Arrow} alt="icon" />
        </Link>
        <input type="text" className="c-filtradosPage-search__input" placeholder="Buscar" />

        <Link className="c-link" to="/filtro">
          <img className="c-filtradosPage-filter__img" src={Filter} alt="filter" />
        </Link>
        <div className="c-filtradosPage__num">{filteredData.length}</div>
      </div>
      <div className="c-gallery__mascotas">
        {filteredData.map((mascota) => (
          <Card key={mascota._id} mascota={mascota} />
        ))}
      </div>
    </section>
  );
}

export default FilteredAnimals;
