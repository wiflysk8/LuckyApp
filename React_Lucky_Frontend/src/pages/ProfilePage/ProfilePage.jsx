/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import Nav from "../../shared/components/Nav/Nav";
import miPerfil from "../../assets/Perfil/miPerfil.png";
import Direcciones from "../../assets/Perfil/direcciones.png";
import Favoritos from "../../assets/Perfil/favoritos.png";
import Notificaciones from "../../assets/Perfil/notificaciones.png";
import EstadoAdopcion from "../../assets/Perfil/estadoAdopcion.png";
import Apadrinar from "../../assets/Perfil/apadrinar.png";
import Donar from "../../assets/Perfil/donar.png";
import Arrow from "../../assets/Perfil/arrow.png";
import "./ProfilePage.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../shared/contexts/UserContext";

export default function ProfilePage() {
  const { user } = useContext(UserContext);

  return (
    <section className="c-profile">
      <div className="c-profile-header">{user && <img className="c-profile-header__img" src={user.image} alt="imagen" />}</div>
      <div className="c-profile-top">
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={miPerfil} alt="icon" />
            <p className="c-profile-top__button__p">Mi perfil</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>

        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={Direcciones} alt="icon" />
            <p className="c-profile-top__button__p">Direcciones</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={Favoritos} alt="icon" />
            <p className="c-profile-top__button__p">Favoritos</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={Notificaciones} alt="icon" />
            <p className="c-profile-top__button__p">Notificaciones</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
      </div>
      <div className="c-profile-bottom">
        <Link to="/estado" className="c-Link">
          <div className="c-profile-top__button">
            <div className="c-profile-top__button__left">
              <img className="c-profile-top__button__left__img" src={EstadoAdopcion} alt="icon" />
              <p className="c-profile-top__button__p">Estado de la adopci??n</p>
            </div>
            <div className="c-profile-top__button__right">
              <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
            </div>
          </div>
        </Link>
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={Apadrinar} alt="icon" />
            <p className="c-profile-top__button__p">Apadrinar</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left">
            <img className="c-profile-top__button__left__img" src={Donar} alt="icon" />
            <p className="c-profile-top__button__p">Donar</p>
          </div>
          <div className="c-profile-top__button__right">
            <img className="c-profile-top__button__right__img" src={Arrow} alt="icon" />
          </div>
        </div>
      </div>
      <Nav />
    </section>
  );
}
