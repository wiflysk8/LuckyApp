import { Link } from "react-router-dom";
import "./FilteredAnimals.scss";

import Filter from "../../assets/Buscador/filtro.png";
import Arrow from "../../assets/Buscador/flechaatras.png";
import Card from "../../shared/components/Card/Card";
import AnimalsFilter from "../AnimalsFilter/AnimalsFilter";
import { useState } from "react";

function FilteredAnimals({ filteredData }) {
  const [on, setOn] = useState(true);
  const copyData = filteredData;
  const [mascotas, setMascotas] = useState(filteredData);

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  const onFilter = (inputValue) => {
    let filteredMascota = copyData.filter((mascota) => {
      if (mascota.nombre.toLowerCase().includes(inputValue.toLowerCase())) {
        return mascota;
      }
      return false;
    });
    setMascotas(filteredMascota);
  };

  return (
    <>
      {on ? (
        <section className="c-filteredAnimals">
          <div className="c-filtradosPage-search">
            <img className="c-filteredAnimals__arrow" src={Arrow} alt="icon" onClick={() => setOn(false)} />

            <input type="text" className="c-filtradosPage-search__input" placeholder="Buscar" onChange={onSearch} />

            <Link className="c-link" to="/filtro">
              <img className="c-filtradosPage-filter__img" src={Filter} alt="filter" onClick={() => setOn(false)} />
            </Link>
            <div className="c-filtradosPage__num" onClick={() => setOn(false)}>
              {filteredData.length}
            </div>
          </div>
          <div className="c-gallery__mascotas">
            {mascotas.map((mascota) => (
              <Card key={mascota._id} mascota={mascota} />
            ))}
          </div>
        </section>
      ) : (
        <AnimalsFilter />
      )}
    </>
  );
}

export default FilteredAnimals;
