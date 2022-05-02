import { useState } from "react";
import FavImg1 from "../../../assets/PerfilAnimales/hearth.png";
import FavImg from "../../../assets/PerfilAnimales/favoritos.png";

import "./Fav.scss";

const Fav = ({ mascota }) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
  };
  return <div>{fav ? <img className="c-card__fav" src={FavImg1} alt="hearth" onClick={handleFav} /> : <img className="c-card__fav" src={FavImg} alt="hearth" onClick={handleFav} />}</div>;
};

export default Fav;
