import React, { useState } from "react";
import "./Card.scss";
import Fav from "../../../assets/PerfilAnimales/favoritos.png";
import Fav2 from "../../../assets/PerfilAnimales/favoritos2.png";

const Card = ({ mascota }) => {
  const [favorito, setFavorito] = useState(false);
  const [arrayFav, setArrayFav] = useState([]);

  const handleFav = () => {
    setFavorito(!favorito);
    if (favorito) {
      const newFav = mascota;
      setArrayFav([...arrayFav], newFav);
      console.log("Favorito", mascota);
    }
  };
  console.log(arrayFav);
  return (
    <>
      {favorito ? <img className="c-card__fav" src={Fav} alt="hearth" onClick={handleFav} /> : <img className="c-card__fav" src={Fav2} alt="hearth" onClick={handleFav} />}
      <div className="c-card">
        <img className="c-card__img" src={mascota.imagen} alt={mascota.nombre} />
        <div className="c-card__footer">
          <h3 className="c-card__name">{mascota.nombre}</h3>
          <div className="c-card__footer-right">
            <p className="c-card__footer-right__p">{mascota.ciudad}</p>
            <p className="c-card__footer-right__p c-card__footer-right__p--right">{mascota.peso}Km</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
