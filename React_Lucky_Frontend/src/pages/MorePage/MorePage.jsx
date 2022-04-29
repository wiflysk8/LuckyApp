import React from "react";
import Protectoras from "../../assets/Perfil/asociaciones.png";
import Eventos from "../../assets/Perfil/eventos.png";
import Curiosidades from "../../assets/Perfil/curiosidades.png";
import Ayuda from "../../assets/Perfil/ayuda.png";
import Configuracion from "../../assets/Perfil/config.png";
import Salir from "../../assets/Perfil/salir.png";
import Arrow from "../../assets/Perfil/arrow.png";
import Nav from "../../shared/components/Nav/Nav";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import "./MorePage.scss";

const MorePage = () => {
  return (
    <section className="c-more">
      <AuthButton />
      <div className="c-more-top">
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Protectoras} alt="icon" />
            <p className="c-more-top__button__p">Asociaciones Protectoras</p>
          </div>
          <div className="c-more-top__button__right">
            <img className="c-more-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Eventos} alt="icon" />
            <p className="c-more-top__button__p">Eventos</p>
          </div>
          <div className="c-more-top__button__right">
            <img className="c-more-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Curiosidades} alt="icon" />
            <p className="c-more-top__button__p">Curiosidades</p>
          </div>
          <div className="c-more-top__button__right">
            <img className="c-more-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Ayuda} alt="icon" />
            <p className="c-more-top__button__p">Ayuda</p>
          </div>
          <div className="c-more-top__button__right">
            <img className="c-more-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Configuracion} alt="icon" />
            <p className="c-more-top__button__p">Configuración</p>
          </div>
          <div className="c-more-top__button__right">
            <img className="c-more-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
      </div>
      <div className="c-more-bottom">
        <div className="c-more-top__button">
          <div className="c-more-top__button__left">
            <img className="c-more-top__button__left__img" src={Salir} alt="icon" />
            <p className="c-more-top__button__p">Cerrar sesión</p>
          </div>
        </div>
      </div>
      <Nav />
    </section>
  );
};

export default MorePage;
