import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper, { Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import Slide1 from "../../../assets/Sliders/onboarding1.png";
import Slide2 from "../../../assets/Sliders/onboarding2.png";
import Slide3 from "../../../assets/Sliders/onboarding3.png";
import Cross from "../../../assets/Sliders/X.png";

import "./Slider.scss";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <>
      <Link to="/welcome">
        <img src={Cross} alt="cross" className="x" />
      </Link>
      <div className="c-slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="c-slider__img" src={Slide1} />
            <h3 className="c-slider__title c-slider__title--first">Encuentra todo tipo de servicios que tienes cerca de ti</h3>
          </div>
          <div className="swiper-slide">
            <img className="c-slider__img" src={Slide2} />
            <h3 className="c-slider__title">Adopta desde tu móvil</h3>
            <p className="c-slider__p">Puedes acceder al perfil de muchos animales que estan en adopcion y filtrarlos para encontrar el que mejor se adapte a ti</p>
          </div>
          <div className="swiper-slide">
            <img className="c-slider__img" src={Slide3} />
            <h3 className="c-slider__title c-slider__title--first">Si eres una asociación sube a tus peludos para darles más difusión</h3>
          </div>
          ...
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default Slider;
