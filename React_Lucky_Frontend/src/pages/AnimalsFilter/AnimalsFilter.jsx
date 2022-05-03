import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalsFilter.scss";
import FilteredAnimals from "../FilteredAnimals/FilteredAnimals";
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
import conejoSecundario from "../../assets/IconosAnimales/conejoROSA.png";
import cobayaSecundario from "../../assets/IconosAnimales/hamsterROSA.png";
import mamiferoSecundario from "../../assets/IconosAnimales/pequeñoMamiferoSecundario (2).png";
import huronSecundario from "../../assets/IconosAnimales/huronROSA.png";
import pezSecundario from "../../assets/IconosAnimales/pezROSA.png";
import reptilSecundario from "../../assets/IconosAnimales/reptilROSA.png";
import anfibioSecundario from "../../assets/IconosAnimales/anfibioROSA.png";
import arañaSecundario from "../../assets/IconosAnimales/aranaROSA.png";
import aveSecundario from "../../assets/IconosAnimales/aveSecundario (3).png";
import macho from "../../assets/Filtros/macho.png";
import hembra from "../../assets/Filtros/hembra.png";
import machoSecundario from "../../assets/IconosAnimales/machoSecundario (3).png";
import hembraSecundario from "../../assets/IconosAnimales/hembraSecundario.png";
import pequeño from "../../assets/Filtros/perro-pequeño.png";
import mediano from "../../assets/Filtros/perro-mediano.png";
import grande from "../../assets/Filtros/perro-grande.png";
import medianoSecundario from "../../assets/IconosAnimales/perritoMedianoSecundario.png";

import cross from "../../assets/Filtros/X.png";
import { UserContext } from "../../shared/contexts/UserContext";

function AnimalsFilter(props) {
  const [ciudad, setCiudad] = useState("noCity");
  const [especie, setEspecie] = useState("noEspecie");
  const [age, setAge] = useState("noAge");
  const [sex, setSexo] = useState("noSex");
  const [shape, setShape] = useState("noShape");

  const { mascotas } = useContext(UserContext);

  const [submited, setSubmited] = useState(false);

  const filteredData = [];

  mascotas.forEach((mascota) => {
    if (mascota.especie.toLowerCase() === especie.toLowerCase() || mascota.sexo.toLowerCase() === sex.toLowerCase) {
      filteredData.push(mascota);
    }
  });

  function filteredCity(selectedCity) {
    setCiudad(selectedCity.target.options[selectedCity.target.selectedIndex].value);
  }

  const filteredAnimal = (selectedAnimal) => {
    if (selectedAnimal === especie) {
      setEspecie("noEspecie");
    } else {
      setEspecie(selectedAnimal);
    }
  };

  function filteredAge(selectedAge) {
    setAge(selectedAge.target.options[selectedAge.target.selectedIndex].value);
  }

  function filteredSex(selectedSex) {
    if (selectedSex === sex) {
      setSexo("noSex");
    } else {
      setSexo(selectedSex);
    }
  }

  const filteredShape = (selectedShape) => {
    if (selectedShape === shape) {
      setShape("noShape");
    } else {
      setShape(selectedShape);
    }
  };

  const handleSubmit = () => {
    setSubmited(true);
  };

  function deleteFilter() {
    setCiudad("noCiudad");
    setEspecie("noEspecie");
    setAge("noAge");
    setSexo("noSex");
    setShape("noShape");
  }

  console.log(ciudad, especie, age, sex, shape);

  return (
    <>
      {!submited ? (
        <section className="c-filter">
          <Link to="/adopcion">
            <img src={cross} alt="cross" className="x" />
          </Link>

          <h1 className="c-filter__title">Filtros</h1>
          <div className="c-filter__top">
            <div className="c-filter-div__top">
              <h2 className="c-filter__category">Ciudad</h2>
              <select className="c-filter__display" onChange={filteredCity} name="cities" id="cityList">
                <option value="noCity">Selecciona una ciudad...</option>
                <option value="barcelona">Barcelona</option>
                <option value="bilbao">Bilbao</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="pontevedra">Pontevedra</option>
                <option value="sevilla">Sevilla</option>
                <option value="valencia">Valencia</option>
                <option value="valladolid">Valladolid</option>
              </select>
              <div className="c-filter-div"></div>
            </div>
          </div>

          <div>
            <h2 className="c-filter__category">Especie</h2>
            <div className="c-filter-div">
              <div className={especie === "perro" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("perro")}>
                <img className="c-filter-image" src={especie === "perro" ? perroSecundario : perro} alt="perro" />
                <p className="c-filter__p">Perro</p>
              </div>
              <div className={especie === "gato" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("gato")}>
                <img className="c-filter-image" src={especie === "gato" ? gatoSecundario : gato} alt="gato" />
                <p className="c-filter__p">Gato</p>
              </div>
              <div className={especie === "conejo" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("conejo")}>
                <img className="c-filter-image" src={especie === "conejo" ? conejoSecundario : conejo} alt="conejo" />
                <p p className="c-filter__p">
                  Conejo
                </p>
              </div>
              <div className={especie === "cobaya" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("cobaya")}>
                <img className="c-filter-image" src={especie === "cobaya" ? cobayaSecundario : cobaya} alt="cobaya" />
                <p p className="c-filter__p">
                  Cobaya
                </p>
              </div>
              <div className={especie === "mamifero" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("mamifero")}>
                <img className="c-filter-image" src={especie === "mamifero" ? mamiferoSecundario : mamifero} alt="mamifero" />
                <p>Pequeño mamífero</p>
              </div>
              <div className={especie === "huron" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("huron")}>
                <img className="c-filter-image" src={especie === "huron" ? huronSecundario : huron} alt="hurón" />
                <p>Hurón</p>
              </div>
              <div className={especie === "pez" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("pez")}>
                <img className="c-filter-image" src={especie === "pez" ? pezSecundario : pez} alt="pez" />
                <p>Pez</p>
              </div>
              <div className={especie === "reptil" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("reptil")}>
                <img className="c-filter-image" src={especie === "reptil" ? reptilSecundario : reptil} alt="reptil" />
                <p>Reptil</p>
              </div>
              <div className={especie === "anfibio" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("anfibio")}>
                <img className="c-filter-image" src={especie === "anfibio" ? anfibioSecundario : anfibio} alt="anfíbio" />
                <p>Anfíbio</p>
              </div>
              <div className={especie === "aracnido" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("aracnido")}>
                <img className="c-filter-image" src={especie === "aracnido" ? arañaSecundario : araña} alt="arácnido" />
                <p>Arácnido o insecto</p>
              </div>
              <div className={especie === "ave" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredAnimal("ave")}>
                <img className="c-filter-image" src={especie === "ave" ? aveSecundario : ave} alt="ave" />
                <p>Ave</p>
              </div>
            </div>
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

          <h2 className="c-filter__category">Sexo</h2>
          <div className="c-filter-div">
            <div className={sex === "macho" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredSex("macho")}>
              <img className="c-filter-image" src={sex === "macho" ? machoSecundario : macho} alt="macho" />
              <p className="c-filter__p">Macho</p>
            </div>
            <div className={sex === "hembra" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredSex("hembra")}>
              <img className="c-filter-image" src={sex === "hembra" ? hembraSecundario : hembra} alt="hembra" />
              <p className="c-filter__p">Hembra</p>
            </div>
          </div>
          <h2 className="c-filter__category">Tamaño</h2>
          <div className="c-filter-div">
            <div className={shape === "pequeño" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredShape("pequeño")}>
              <img className="c-filter-image__pequeño" src={shape === "pequeño" ? medianoSecundario : pequeño} alt="tamaño pequeño" />
              <p className="c-filter__p">Pequeño</p>
            </div>
            <div className={shape === "mediano" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredShape("mediano")}>
              <img className="c-filter-image__mediano" src={shape === "mediano" ? medianoSecundario : mediano} alt="tamaño mediano" />
              <p className="c-filter__p">Mediano</p>
            </div>
            <div className={shape === "grande" ? "c-filter-container__icon selected" : "c-filter-container__icon no-selected"} onClick={() => filteredShape("grande")}>
              <img className="c-filter-image__grande" src={shape === "grande" ? medianoSecundario : grande} alt="tamaño grande" />
              <p className="c-filter__p">Grande</p>
            </div>
          </div>
          <div className="c-filter__btns">
            <button className="c-filter-button__submit" onClick={handleSubmit}>
              Aplicar
            </button>
            <button className="c-filter-button__delete" onClick={deleteFilter}>
              Borrar filtros
            </button>
          </div>
        </section>
      ) : (
        <FilteredAnimals filteredData={filteredData} />
      )}
    </>
  );
}

export default AnimalsFilter;

/*  useEffect(() => {
    const getMascotas = async () => {
        const res = await axios.get("https://luismrtinez.com/mascotas");
        setMascotas(res.data);
        setFilteredMascotas(res.data);
      };


{setSelected === true ? <button><img src={perro} alt="c-img-filtro-perro" /> <p className="c-filter__p">Perro</p></button> : <button><img src={perro} alt="c-img-filtro-perro" /> <p className="c-filter__p">Perro</p></button>}

*/
