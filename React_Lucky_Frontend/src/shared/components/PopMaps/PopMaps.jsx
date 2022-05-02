import './PopMaps.scss';
import Veterinario from "../../../assets/Filtros/veterinario.png";
import Veterinario2 from "../../../assets/Filtros/veterinario2.png";
import Peluqueria from "../../../assets/Filtros/peluqueria.png";
import Peluqueria2 from "../../../assets/Filtros/peluqueria2.png";
import Petfriendly from "../../../assets/Filtros/cafe.png";
import Petfriendly2 from "../../../assets/Filtros/cafe2.png";
import Educacion from "../../../assets/Filtros/educacion.png";
import Educacion2 from "../../../assets/Filtros/educacion2.png";
import Guarderia from "../../../assets/Filtros/guarderia.png";
import Guarderia2 from "../../../assets/Filtros/guarderia2.png";
import Tienda from "../../../assets/Filtros/tienda.png";
import Tienda2 from "../../../assets/Filtros/tienda2.png";
import React, { useState } from "react";

const PopMaps = () => {

    const [estadoMaps, setEstadoMaps] = useState(false);
    const [veterinario, setVeterinario] = useState(true);
    const [peluqueria, setPeluqueria] = useState(true);
    const [petFriendly, setPetFriendly] = useState(true);
    const [educacion, setEducacion] = useState(true);
    const [guarderia, setGuarderia] = useState(true);
    const [tienda, setTienda] = useState(true);

    const handleVeterinario = () => {
        setVeterinario(!veterinario);
    };

    const handlePeluqueria = () => {
        setPeluqueria(!peluqueria);
    };

    const handlePetFriendly = () => {
        setPetFriendly(!petFriendly);
    };

    const handleEducacion = () => {
        setEducacion(!educacion);
    };

    const handleGuarderia = () => {
        setGuarderia(!guarderia);
    };

    const handleTienda = () => {
        setTienda(!tienda);
    };

    const handleChangeEstadoMaps = () => {
        if (estadoMaps === false) {
            setEstadoMaps(true);
        }
    };


    return (
        <div className="c-popmaps">
            <h1 className="c-popmaps__title">Filtros</h1>
            <div className="c-popmaps__container">
                {veterinario ?
                    <div className="c-popmaps__box" onClick={handleVeterinario} >
                        <img className="c-popmaps__box__img" src={Veterinario} alt="veterinario" />
                        <p className="c-popmaps__box__text">Veterinario</p>
                    </div> :
                    <div className="c-popmaps__box__yellow" onClick={handleVeterinario} >
                        <img className="c-popmaps__box__img" src={Veterinario2} alt="veterinario2" />
                        <p className="c-popmaps__box__text__yellow">Veterinario</p>

                    </div>
                }
                {peluqueria ?
                    <div className="c-popmaps__box" onClick={handlePeluqueria}>
                        <img className="c-popmaps__box__img" src={Peluqueria} alt="peluqueria"  />
                        <p className="c-popmaps__box__text">Peluquería</p>
                    </div> :
                    <div className="c-popmaps__box__purple" onClick={handlePeluqueria}>
                        <img className="c-popmaps__box__img" src={Peluqueria2} alt="peluqueria2" />
                        <p className="c-popmaps__box__text__purple">Peluquería</p>
                    </div>
                }
                {petFriendly ?
                    <div className="c-popmaps__box" onClick={handlePetFriendly}>
                        <img className="c-popmaps__box__img" src={Petfriendly} alt="petfriendly" />
                        <p className="c-popmaps__box__text">Pet friendly</p>
                    </div> :
                    <div className="c-popmaps__box__green" onClick={handlePetFriendly}>
                        <img className="c-popmaps__box__img" src={Petfriendly2} alt="petfriendly2" />
                        <p className="c-popmaps__box__text__green">Pet friendly</p>
                    </div>
                }
                {educacion ?
                    <div className="c-popmaps__box" onClick={handleEducacion} >
                        <img className="c-popmaps__box__img" src={Educacion} alt="educacion" />
                        <p className="c-popmaps__box__text">Educación</p>
                    </div> :
                    <div className="c-popmaps__box__blue" onClick={handleEducacion} >
                        <img className="c-popmaps__box__img" src={Educacion2} alt="educacion2" />
                        <p className="c-popmaps__box__text__blue">Educación</p>

                    </div>
                }
                {guarderia ?
                    <div className="c-popmaps__box" onClick={handleGuarderia}>
                        <img className="c-popmaps__box__img" src={Guarderia} alt="guarderia"  />
                        <p className="c-popmaps__box__text">Guardería</p>
                    </div> :
                    <div className="c-popmaps__box__pink" onClick={handleGuarderia}>
                        <img className="c-popmaps__box__img" src={Guarderia2} alt="guarderia2" />
                        <p className="c-popmaps__box__text__pink">Guardería</p>
                    </div>
                }
                {tienda ?
                    <div className="c-popmaps__box" onClick={handleTienda}>
                        <img className="c-popmaps__box__img" src={Tienda} alt="tienda" />
                        <p className="c-popmaps__box__text">Tienda</p>
                    </div> :
                    <div className="c-popmaps__box__brown" onClick={handleTienda}>
                        <img className="c-popmaps__box__img" src={Tienda2} alt="tienda2" />
                        <p className="c-popmaps__box__text__brown">Tienda</p>
                    </div>
                }
            </div>
            <button className="c-popmaps__btn" onClick={handleChangeEstadoMaps}>Aplicar</button>
        </div>
    )
}

export default PopMaps;