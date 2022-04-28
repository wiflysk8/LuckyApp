import React from "react";
import "./AnimalsFilter.scss";
import sf from sdf ;


export default function AnimalsFilter(){


    


return (
    <>
    <h1>Filtros</h1>
    <div>
        <h2 class="c-city-filter">Ciudad</h2>
        <select name="cities" id="cityList">
            <option value="madrid">Madrid</option>
        </select>
    </div>
    <div>
        <h2 class="c-kind-animal-filter">Especie</h2>
        <ul>
            <li>
                <img src="" alt="c-img-filtro-perro" />
                <p>Perro</p>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="c-age-filter">Edad</h2>
        <select name="age" id="ageList">
            <option value="puppy">Cachorro</option>
            <option value="young">Joven</option>
            <option value="adult">Adulto</option>
        </select>
    </div>
    <div>
        <h2 className="c-gender-filter">Sexo</h2>

    </div>
    <div>
        <h2 className="c-shape-filter">Tamaño</h2>
    </div>
    <div>
    <button class="c-delete-filter">Borrar filtros</button>
    <button class="c-aply-filter">Aplicar</button>
    </div>
    
</>)
};

/*  useEffect(() => {
    const getMascotas = async () => {
        const res = await axios.get("https://luismrtinez.com/mascotas");
        setMascotas(res.data);
        setFilteredMascotas(res.data);
      };
*/