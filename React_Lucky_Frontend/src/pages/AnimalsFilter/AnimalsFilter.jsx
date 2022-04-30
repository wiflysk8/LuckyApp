import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalsFilter.scss";

import perro from "../../assets/Filtros/perro2.png";
import gato from "../../assets/Filtros/gato.png";
import conejo from "../../assets/Filtros/conejo2.png";
import cobaya from "../../assets/Filtros/hamster.png";
import mamifero from "../../assets/Filtros/mamifero.png";
import huron from "../../assets/Filtros/huron.png";
import pez from "../../assets/Filtros/pez.png";
import reptil from "../../assets/Filtros/reptil.png";
import anfibio from "../../assets/Filtros/anfibio3.png";
import araña from "../../assets/Filtros/araña.png";
import ave from "../../assets/Filtros/ave.png";

import perrosecundario from "../../assets/IconosAnimales/perroSecundario.png";

import macho from "../../assets/Filtros/macho.png";
import hembra from "../../assets/Filtros/hembra.png";
import machosecundario from "../../assets/IconosAnimales/machoSecundario (3).png";
import hembrasecundario from "../../assets/IconosAnimales/hembraSecundario.png";


import pequeño from "../../assets/Filtros/perro-pequeño.png";
import mediano from "../../assets/Filtros/perro-mediano.png";
import grande from "../../assets/Filtros/perro-grande.png";




import cross from "../../assets/Filtros/X.png";

const AnimalsFilter = () =>{

    const valoresFiltro = ["sinAnimal", "sinEdad", "sinSexo", "sinTamaño"];
    const [selected, setSelected] = useState(false);

    const submit= (e) => {
        e.preventDefault();
        /*let url = await axios.get("https://luismrtinez.com/mascotas");*/
    }

    const filteredAnimal = () =>{
        if (selected === false | valoresFiltro[0] === "sinAnimal") {
            setSelected(true);
            valoresFiltro.splice(0,1,"perro");
            return valoresFiltro;
        } else{
            setSelected(false);
            valoresFiltro.splice(0,1,"sinAnimal")
            return valoresFiltro;
        }
        console.log(selected);
        return selected;
    };

    console.log(valoresFiltro);

return (
    <>
    <Link to="/filtro"></Link>
    <section className="c-filter">
        <form action="">
            <Link to="/adopcion">
                <img src={cross} alt="cross" className="x" />
            </Link>
            <h1 className="c-filter__title">Filtros</h1>
            <div>
                <h2 className="c-filter__category">Ciudad</h2>
                <select className="c-filter__display" name="cities" id="cityList">
                    <option value="madrid" /*falta dinamico?*/  >Madrid</option>
                </select>
            </div>
            <div>
                <h2 className="c-filter__category">Especie</h2>
                <ul className="c-filter-container">
                    <li className="c-filter-container__noselected"><img src={perro} alt="perro" onClick={filteredAnimal} /> <p>Perro</p></li>
                    <li className="c-filter-container__noselected"><img src={gato} alt="gato" onClick={filteredAnimal} /> <p>Gato</p></li>
                    <li className="c-filter-container__noselected"><img src={conejo} alt="conejo" onClick={filteredAnimal} /> <p>Conejo</p></li>
                    <li className="c-filter-container__noselected"><img src={cobaya} alt="cobaya" onClick={filteredAnimal} /> <p>Cobaya</p></li>
                    <li className="c-filter-container__noselected"><img src={mamifero} alt="pequeño mamifero" onClick={filteredAnimal} /> <p>Pequeño mamífero</p></li>
                    <li className="c-filter-container__noselected"><img src={huron} alt="hurón" onClick={filteredAnimal} /> <p>Hurón</p></li>
                    <li className="c-filter-container__noselected"><img src={pez} alt="pez" onClick={filteredAnimal} /> <p>Pez</p></li>
                    <li className="c-filter-container__noselected"><img src={reptil} alt="reptil" onClick={filteredAnimal} /> <p>Reptil</p></li>
                    <li className="c-filter-container__noselected"><img src={anfibio} alt="anfíbio" onClick={filteredAnimal} /> <p>Anfíbio</p></li>
                    <li className="c-filter-container__noselected"><img src={araña} alt="arácnido" onClick={filteredAnimal} /> <p>Arácnido o insecto</p></li>
                    <li className="c-filter-container__noselected"><img src={ave} alt="ave" onClick={filteredAnimal} /> <p>Ave</p></li>
                </ul>
            </div>
            <div>
                <h2 className="c-filter__category">Edad</h2>
                <select className="c-filter__display" name="age" id="ageList">
                    <option value="puppy">Cachorro</option>
                    <option value="young">Joven</option>
                    <option value="adult">Adulto</option>
                </select>
            </div>
            <div>
                <h2 className="c-filter__category">Sexo</h2>
                <ul className="c-filter-container">
                    <li><img src={macho} alt="macho" /><p className="c-shape-filter">Macho</p></li>
                    <li><img src={hembra} alt="hembra" /><p className="c-shape-filter">Hembra</p></li>
                </ul>
            </div>
            <div>
                <h2 className="c-filter__category">Tamaño</h2>
                <ul className="c-filter-container">
                    <li><img src={pequeño} alt="tamaño pequeño" /><p className="c-shape-filter">Pequeño</p></li>
                    <li><img src={mediano} alt="tamaño mediano" /><p className="c-shape-filter">Mediano</p></li>
                    <li><img src={grande} alt="tamaño grande" /><p className="c-shape-filter">Grande</p></li>
                </ul>        
            </div>
            <div>
                <button className="c-filter-button__delete">Borrar filtros</button>
                <button className="c-filter-button__submit">Aplicar</button>
            </div>
        </form>
    </section>
    </>
)};

export default AnimalsFilter;

/*  useEffect(() => {
    const getMascotas = async () => {
        const res = await axios.get("https://luismrtinez.com/mascotas");
        setMascotas(res.data);
        setFilteredMascotas(res.data);
      };


{setSelected === true ? <button><img src={perro} alt="c-img-filtro-perro" /> <p>Perro</p></button> : <button><img src={perro} alt="c-img-filtro-perro" /> <p>Perro</p></button>}

*/