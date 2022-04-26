import React, { useEffect } from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./HomePage.scss";
import "swiper/css";
import "swiper/css/pagination";
import Swiper, { Pagination } from "swiper";
import pet2 from "../../assets/Navegador/pet2.png";
import apadrinar from "../../assets/Perfil/apadrinar.png";
import hamster from "../../assets/FotosAnimales/hamster.png";
import iguana from "../../assets/FotosAnimales/iguana.png";
import motero from "../../assets/FotosAnimales/perro-motero.png";
import donar from "../../assets/Perfil/donar.png";
import conejo from "../../assets/FotosAnimales/conejo.png";
import gato from "../../assets/FotosAnimales/gato.png";
const HomePage = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
      },
    });
    console.log(swiper);
}, []);

const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="c-home">
      <h2>¡Hola Celia!</h2>
      <div className="c-home-div swiper">
      <div className="c-home-div-div swiper-wrapper">
      <div className="c-home-box swiper-slide">
        <img className="c-home-box__donar" src={donar} alt="donar"/>
        <div className="c-home-box__paragraph">
        <h3 className="c-home-box__titulo">Estado de la donación</h3>
        <p className="c-home-box__texto">Revisa el proceso de tus donaciones en curso</p>
        </div>
      </div>
      <div className="c-home-box2 swiper-slide">
        <img className="c-home-box2__pet2" src={pet2} alt="pet2"/>
        <div className="c-home-box2__paragraph">
        <h3 className="c-home-box2__titulo">Estado de la adopción</h3>
        <p className="c-home-box2__texto">Revisa el proceso de tus adopciones en curso</p>
        </div>
      </div>
      <div className="c-home-box3 swiper-slide">
        <img className="c-home-box3__apadrinar" src={apadrinar} alt="apadrinar"/>
        <div className="c-home-box3__paragraph">
        <h3 className="c-home-box3__titulo">Estado de apadrinar</h3>
        <p className="c-home-box3__texto">Revisa el proceso de tus apadrinaciones</p>
        </div>
      </div>
      </div>
      <div className="swiper-pagination"></div>
      </div>
      <hr/>
      <div>
      <h3>Novedades</h3>
      <div className="c-home__gallery">
      <img className="c-home__gallery__hamster" src={hamster} alt="hamster" />
      <h3 className="c-home__gallery__title">10 Curiosidades sobre las chinchillas</h3>
      </div>
      <div className="c-home__gallery2">
      <img className="c-home__gallery2__iguana" src={iguana} alt="iguana" />
      <h3 className="c-home__gallery2__title">¿Sabes qué comen las iguanas?</h3>
      </div>
      <div className="c-home__gallery3">
      <img className="c-home__gallery3__motero" src={motero} alt="motero" />
      <h3 className="c-home__gallery3__title">10 lugares para visitar con tu perro en Madrid</h3>
      </div>
      <div className="c-home__gallery4">
      <img className="c-home__gallery4__conejo" src={conejo} alt="conejo" />
      <h3 className="c-home__gallery4__title">5 alimentos tóxicos para los conejos</h3>
      </div>
      <div className="c-home__gallery5">
      <img className="c-home__gallery5__gato" src={gato} alt="gato" />
      <h3 className="c-home__gallery5__title">Trastadas de los gatos en imágenes</h3>
      </div>
      </div>
      <Nav />
    </section>
  );
};

export default HomePage;