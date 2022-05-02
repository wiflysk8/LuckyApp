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
    const [animal, setAnimal] = useState("noAnimal");
    const [age, setAge] = useState("noAge");
    const [sex, setSexo] = useState("noSex");
    const [shape, setShape] = useState("noShape");

    const [filtroFinal, setFiltroFinal] = useState([]);

    const submit= (filtro) => {
        filtro.preventDefault();
        let url = "https://luismrtinez.com/mascotas";
        if (ciudad !== "noCity" || animal !=="noAnimal") {
            url += '/filtro?';
            let filtered = false;
            if (ciudad !== "noCity") {
                url += 'ciudad=' + ciudad;
                filtered = true;
            }
            if (animal !== "noAnimal"){
                url += 'animal=' + animal;
                filtered = true;
            }
            if (age !== "noAge"){
                url += 'edad=' + age;
                filtered = true;
            }
            if (sex !== "noSex"){
                url += 'sexo=' + sex;
                filtered = true;
            }
            if (shape !== "noShape"){
                url += 'tamaño=' + shape;
                filtered = true;
            }
            
            
        };

        API.get(url)
        .then((filtrado) => {
            console.log(filtrado.data);
            setFiltroFinal(filtrado.data);
            localStorage.setItem('mascotaFiltrada', JSON.stringify(filtrado.data));
            setTimeout(() => {
                window.location.href = "/resultado"
            }, 100);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    function filteredCity(selectedCity) {
        setCiudad(selectedCity.target.options[selectedCity.target.selectedIndex].value)
    };

    const filteredAnimal = (selectedAnimal) =>{
        if(selectedAnimal === animal ) {
            setAnimal("noAnimal");
            document.getElementById(selectedAnimal).classList.remove("c-filter-container__selected");
            document.getElementById(selectedAnimal).classList.add("c-filter-container__noselected");
        }else {
            setAnimal(selectedAnimal);
            document.getElementById(selectedAnimal).classList.remove("c-filter-container__noselceted");
            document.getElementById(selectedAnimal).classList.add("c-filter-container__selected");
        };
    };

    function filteredAge(selectedAge) {
        setAge(selectedAge.target.options[selectedAge.target.selectedIndex].value)
    };

    function filteredSex (selectedSex) {
        if (selectedSex === sex){
            setSexo("noSex");
            document.getElementById(selectedSex).classList.remove("c-filter-container__selected");
            document.getElementById(selectedSex).classList.add("c-filter-container__noselected");
        } else {
            setSexo(selectedSex);
            document.getElementById(selectedSex).classList.remove("c-filter-container__noselected");
            document.getElementById(selectedSex).classList.add("c-filter-container__selected");
        };
    };

    const filteredShape = (selectedShape) => {
        if (selectedShape === shape){
            setShape("noShape");
            document.getElementById(selectedShape).classList.remove("c-filter-container__noselected");
            document.getElementById(selectedShape).classList.add("c-filter-container__selected");
        } else {
            setShape(selectedShape);
            document.getElementById(selectedShape).classList.remove("c-filter-container__selected");
            document.getElementById(selectedShape).classList.add("c-filter-container__noselected");
        };
    }
function deleteFilter(){
    setCiudad("noCiudad");
    setAnimal("noAnimal");
    setAge("noAge");
    setSexo("noSex");
    setShape("noShape");
    console.log(ciudad, animal, age, sex, shape);    
};

console.log(ciudad, animal, age, sex, shape);



    /*console.log(valoresFiltro);*/

return (
    <section className="c-filter">
        <form onSubmit={submit}>
            <Link to="/adopcion">
                <img src={cross} alt="cross" className="x" />
            </Link>
            <h1 className="c-filter__title">Filtros</h1>
            <div>
                <h2 className="c-filter__category">Ciudad</h2>
                <select className="c-filter__display" onChange= {filteredCity} name="cities" id="cityList">
                <option value="noCity">Selecciona...</option>
                <option value="">Cualquiera</option>                
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
                    <li className="c-filter-container__noselected"><img src={ animal === 'perro' ? perroSecundario : perro } alt="perro" onClick={() => filteredAnimal("perro")} /> <p>Perro</p></li>
                    <li className="c-filter-container__noselected"><img src={ animal === 'gato' ? gatoSecundario : gato } alt="gato" onClick={() => filteredAnimal("gato")} /> <p>Gato</p></li>
                    <li className="c-filter-container__noselected"><img src={conejo} alt="conejo" onClick={() => filteredAnimal("conejo")} /> <p>Conejo</p></li>
                    <li className="c-filter-container__noselected"><img src={cobaya} alt="cobaya" onClick={() => filteredAnimal("cobaya")} /> <p>Cobaya</p></li>
                    <li className="c-filter-container__noselected"><img src={animal === 'mamifero' ? mamiferoSecundario : mamifero} alt="pequeño mamifero" onClick={() => filteredAnimal("mamifero")} /> <p>Pequeño mamífero</p></li>
                    {/*en la api figura un 'pequeño mamífero', no hacen falta las dos palabras*/}
                    <li className="c-filter-container__noselected"><img src={huron} alt="hurón" onClick={() => filteredAnimal("huron")} /> <p>Hurón</p></li>
                    <li className="c-filter-container__noselected"><img src={pez} alt="pez" onClick={() => filteredAnimal("pez")} /> <p>Pez</p></li>
                    <li className="c-filter-container__noselected"><img src={reptil} alt="reptil" onClick={() => filteredAnimal("reptil")} /> <p>Reptil</p></li>
                    <li className="c-filter-container__noselected"><img src={anfibio} alt="anfíbio" onClick={() => filteredAnimal("anfibio")} /> <p>Anfíbio</p></li>
                    <li className="c-filter-container__noselected"><img src={araña} alt="arácnido" onClick={() => filteredAnimal("aracnido")} /> <p>Arácnido o insecto</p></li>
                    <li className="c-filter-container__noselected"><img src={ animal === 'ave' ? aveSecundario : ave} alt="ave" onClick={() => filteredAnimal("ave")} /> <p>Ave</p></li>
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
                    <li><img src={ sex === 'macho' ? machoSecundario : macho } alt="macho" onClick={() => filteredSex("macho")} /><p className="c-shape-filter">Macho</p></li>
                    <li><img src={ sex === 'hembra' ? hembraSecundario : hembra } alt="hembra" onClick={() => filteredSex("hembra")} /><p className="c-shape-filter">Hembra</p></li>
                </ul>
            </div>
            <div>
                <h2 className="c-filter__category">Tamaño</h2>
                <ul className="c-filter-container">
                    <li><img src={shape === 'pequeño' ? pequeñoSecundario : pequeño } alt="tamaño pequeño" onClick={() => filteredShape("pequeño")} /><p className="c-shape-filter">Pequeño</p></li>
                    <li><img src={shape === 'mediano' ? medianoSecundario : mediano } alt="tamaño mediano" onClick={() => filteredShape("mediano")} /><p className="c-shape-filter">Mediano</p></li>
                    <li><img src={shape === 'grande' ? grande : grande } alt="tamaño grande" onClick={() => filteredShape("grande")} /><p className="c-shape-filter">Grande</p></li>
                </ul>        
            </div>
            <div>
                <Link to="/adopcion">
                    <button className="c-filter-button__delete" onClick={deleteFilter}>Borrar filtros</button>
                </Link>
                <button className="c-filter-button__submit">Aplicar</button>
            </div>
        </form>
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