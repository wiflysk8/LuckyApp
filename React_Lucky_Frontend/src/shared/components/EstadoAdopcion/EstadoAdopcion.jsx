/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EstadoAdopcion.scss";
import enProcesoImg from "../../../assets/Estados/proceso.png";
import SearchLogo from "../../../assets/Buscador/lupa.png";
import Filter from "../../../assets/Buscador/filtro.png";
import { Link } from "react-router-dom";
import arrow from "../../../assets/Buscador/flechaatras.png";
import CustomPopup from "../CustomPopup/CustomPopup";
import PopAdopcion from "../../../shared/components/PopAdopciones/PopAdopciones";
import { generatePath } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EstadoAdopcion = () => {
  const [filteredMascotas, setFilteredMascotas] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [user, setUser] = useState();
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/adopcion");
    window.location.reload();
  };

  const localUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`https://luismrtinez.com/users/${localUser._id}`);
      setUser(res.data);
      setMascotas(res.data.mascotas);
      setFilteredMascotas(res.data.mascotas);
    };
    getUser();
  }, []);

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  const onFilter = (inputValue) => {
    let filteredMascota = filteredMascotas.filter((mascota) => {
      if (mascota.nombre.toLowerCase().includes(inputValue.toLowerCase())) {
        return mascota;
      }
      return false;
    });
    setMascotas(filteredMascota);
  };

  return (
    <div className="c-estado">
      {/*  <Link to="/adopcion"> */}
      <img className="c-estado__arrow" src={arrow} alt="flecha" onClick={handleBack} />

      <input type="text" className="c-estado__input" placeholder="Buscar" onChange={onSearch} />
      <img className="c-map__logo" src={SearchLogo} alt="lupa" />
      <img
        className="c-map__logo c-map__logo--filter"
        src={Filter}
        alt="lupa"
        onClick={(e) => {
          setVisibility(!visibility);
          e.preventDefault();
          //navigate("/estado");
          //window.location.reload();
        }}
      />

      {user && (
        <section className="c-detailSection">
          {mascotas.map((mascota, index) => (
            <div key={index} className="c-estado-adopcion">
              <Link className="c-estado-adopcion__link" to={generatePath("/adopcionDetail/:nombre", { nombre: mascota.nombre })}>
                <div className="c-estado-adopcion__top">
                  <p className="c-estado-adopcion__top__p">Adopci??n de {mascota.nombre}</p>
                  <p className="c-estado-adopcion__top__estado">
                    En proceso <img className="c-estado-adopcion__top__img" src={enProcesoImg} alt="proceso" />
                  </p>
                </div>
                <div className="c-estado-adopcion__bottom">
                  <div className="c-estado-adopcion__bottom__left">
                    <img className="c-estado-adopcion__bottom__left__img" src={mascota.imagen} alt="imagen del animalito" />
                  </div>
                  <div className="c-estado-adopcion__bottom__right">
                    <p className="c-estado-adopcion__bottom__right__p">Nombre: {mascota.nombre}</p>
                    <p className="c-estado-adopcion__bottom__right__p">Ciudad: {mascota.ciudad}</p>
                    <p className="c-estado-adopcion__bottom__right__p">Sexo: {mascota.sexo}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      )}
      <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
        <PopAdopcion setVisibility={setVisibility} />
      </CustomPopup>
    </div>
  );
};

export default EstadoAdopcion;
