import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalsFilter.scss";
import FilteredAnimals from "../FilteredAnimals/FilteredAnimals";
import { API } from "../../shared/services/api";

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
import perroSecundario from "../../assets/IconosAnimales/perroSecundario.png";
import gatoSecundario from "../../assets/IconosAnimales/catSecundario (2).png";
/*import conejosecundario from "../../assets/IconosAnimales/conejo.png";*/
/*import cobayasecundario from "../../assets/IconosAnimales/hamster.png";*/
import mamiferoSecundario from "../../assets/IconosAnimales/pequeñoMamiferoSecundario (2).png";
/*import huronsecundario from "../../assets/IconosAnimales/huron.png";*/
/*import pezsecundario from "../../assets/IconosAnimales/pez.png";*/
/*import reptilsecundario from "../../assets/IconosAnimales/reptil.png";*/
/*import anfibiosecundario from "../../assets/IconosAnimales/anfibio3.png";*/
/*import arañasecundario from "../../assets/IconosAnimales/araña.png";*/
import aveSecundario from "../../assets/IconosAnimales/aveSecundario (3).png";

import macho from "../../assets/Filtros/macho.png";
import hembra from "../../assets/Filtros/hembra.png";
import machoSecundario from "../../assets/IconosAnimales/machoSecundario (3).png";
import hembraSecundario from "../../assets/IconosAnimales/hembraSecundario.png";

import pequeño from "../../assets/Filtros/perro-pequeño.png";
import mediano from "../../assets/Filtros/perro-mediano.png";
import grande from "../../assets/Filtros/perro-grande.png";
import pequeñoSecundario from "../../assets/IconosAnimales/perritoPequeñoSecundario.png";
import medianoSecundario from "../../assets/IconosAnimales/perritoMedianoSecundario.png";

import cross from "../../assets/Filtros/X.png";

function AnimalsFilter(props) {

    const [ciudad, setCiudad] = useState("noCity");
    const [especie, setEspecie] = useState("noEspecie");
    const [age, setAge] = useState("noAge");
    const [sex, setSexo] = useState("noSex");
    const [shape, setShape] = useState("noShape");

    const [filtroFinal, setFiltroFinal] = useState([]);

    const submit= (filtro) => {
        filtro.preventDefault();
        
        const url = 'https://luismrtinez.com/mascotas';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const datosFiltro= [];
            data.forEach(animal => {
                if (animal.ciudad.toLowerCase() === ciudad.toLowerCase())(
                    console.log(animal)
                )
                if (animal.especie.toLowerCase() === especie.toLowerCase())(
                    console.log(animal)
                )
                if (animal.sexo.toLowerCase() === sex.toLowerCase())(
                    console.log(animal)
                )
                if (animal.tamano.toLowerCase() === shape.toLowerCase())(
                    console.log(animal)
                )
            })
        })
        .then((filtrado) => {
            setFiltroFinal(filtrado.data);
            localStorage.setItem('mascotaFiltrada', JSON.stringify(filtroFinal));
            /*console.log(filtrado.data);*/
            /*setTimeout(() => {
                window.location.href = "/resultado"
            }, 100);*/
        })
        .catch((error) => {
            console.log(error);
        })
    };


    function filteredCity(selectedCity) {
        setCiudad(selectedCity.target.options[selectedCity.target.selectedIndex].value)
    };

    const filteredAnimal = (selectedAnimal) =>{
        if(selectedAnimal === especie ) {
            setEspecie("noEspecie");
            document.getElementsByClassName("c-filter-container__icon").classList.replace("selected","no-selected")
        }else {
            setEspecie(selectedAnimal);
            document.getElementsByClassName("c-filter-container__icon").classList.replace("no-selected", "selected");
        };
    };

    function filteredAge(selectedAge) {
        setAge(selectedAge.target.options[selectedAge.target.selectedIndex].value)
    };

    function filteredSex (selectedSex) {
        if (selectedSex === sex){
            setSexo("noSex");
            document.getElementById(selectedSex).classList.remove("selected");
            document.getElementById(selectedSex).classList.add("no-selected");
        } else {
            setSexo(selectedSex);
            document.getElementById(selectedSex).classList.remove("no-selected");
            document.getElementById(selectedSex).classList.add("selected");
        };
    };

    const filteredShape = (selectedShape) => {
        if (selectedShape === shape){
            setShape("noShape");
            document.getElementById(selectedShape).classList.remove("no-selected");
            document.getElementById(selectedShape).classList.add("selected");
        } else {
            setShape(selectedShape);
            document.getElementById(selectedShape).classList.remove("selected");
            document.getElementById(selectedShape).classList.add("no-selected");
        };
    }
function deleteFilter(){
    setCiudad("noCiudad");
    setEspecie("noEspecie");
    setAge("noAge");
    setSexo("noSex");
    setShape("noShape");    
};

console.log(ciudad, especie, age, sex, shape);


return (
    <section className="c-filter">
            <Link to="/adopcion">
                <img src={cross} alt="cross" className="x" />
            </Link>
            <h1 className="c-filter__title">Filtros</h1>
            <div>
                <h2 className="c-filter__category">Ciudad</h2>
                <select className="c-filter__display" onChange= {filteredCity} name="cities" id="cityList">
                <option value="noCity">Selecciona...</option>
                <option value="barcelona">Barcelona</option>
                <option value="bilbao">Bilbao</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="pontevedra">Pontevedra</option>
                <option value="sevilla">Sevilla</option>
                <option value="valencia">Valencia</option>
                <option value="valladolid">Valladolid</option>
                </select>
            </div>
            <div>
                <h2 className="c-filter__category">Especie</h2>
                <ul className="c-filter-container">
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("perro")}><img src={ especie === 'perro' ? perroSecundario : perro } alt="perro" /> <p>Perro</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("gato")}><img src={ especie === 'gato' ? gatoSecundario : gato } alt="gato" /> <p>Gato</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("conejo")}><img src={conejo} alt="conejo" /> <p>Conejo</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("cobaya")}><img src={cobaya} alt="cobaya" /> <p>Cobaya</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("mamifero")}><img src={especie === 'mamifero' ? mamiferoSecundario : mamifero} alt="pequeño mamifero" /> <p>Pequeño mamífero</p></li>
                    {/*en la api figura un 'pequeño mamífero', no hacen falta las dos palabras*/}
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("huron")}><img src={huron} alt="hurón" /> <p>Hurón</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("pez")}><img src={pez} alt="pez" /> <p>Pez</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("reptil")}><img src={reptil} alt="reptil" /> <p>Reptil</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("anfibio")}><img src={anfibio} alt="anfíbio" /> <p>Anfíbio</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("aracnido")}><img src={araña} alt="arácnido" /> <p>Arácnido o insecto</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredAnimal("ave")}><img src={ especie === 'ave' ? aveSecundario : ave} alt="ave" /> <p>Ave</p></li>
                </ul>
            </div>
            <div>
                <h2 className="c-filter__category">Edad</h2>
                <select className="c-filter__display" onChange={filteredAge} name="age" id="ageList">
                    <option value="noCity">Selecciona...</option>
                    <option value="cachorro">Cachorro</option>
                    <option value="joven">Joven</option>
                    <option value="adulto">Adulto</option>
                </select>
            </div>
            <div>
                <h2 className="c-filter__category">Sexo</h2>
                <ul className="c-filter-container">
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredSex("macho")}><img src={ sex === 'macho' ? machoSecundario : macho } alt="macho" /><p className="c-shape-filter">Macho</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredSex("hembra")}><img src={ sex === 'hembra' ? hembraSecundario : hembra } alt="hembra" /><p className="c-shape-filter">Hembra</p></li>
                </ul>
            </div>
            <div>
                <h2 className="c-filter__category">Tamaño</h2>
                <ul className="c-filter-container">
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredShape("pequeño")}><img src={shape === 'pequeño' ? pequeñoSecundario : pequeño } alt="tamaño pequeño" /><p className="c-shape-filter">Pequeño</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredShape("mediano")}><img src={shape === 'mediano' ? medianoSecundario : mediano } alt="tamaño mediano" /><p className="c-shape-filter">Mediano</p></li>
                    <li className="c-filter-container__icon no-selected" onClick={() => filteredShape("grande")}><img src={shape === 'grande' ? grande : grande } alt="tamaño grande" /><p className="c-shape-filter">Grande</p></li>
                </ul>        
            </div>
            <div>
                <button className="c-filter-button__submit" onClick={submit}>Aplicar</button>
            </div>
        <button className="c-filter-button__delete" onClick={deleteFilter}>Borrar filtros</button>
    </section>
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