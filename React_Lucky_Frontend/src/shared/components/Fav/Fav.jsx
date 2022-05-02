import { useState } from "react";
import FavImg from "../../../assets/PerfilAnimales/hearth.png";
import FavImg2 from "../../../assets/PerfilAnimales/favoritos2.png";

import "./Fav.scss";

const Fav = ({ mascota }) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
  };
  return <div>{fav ? <img className="c-card__fav" src={FavImg} alt="hearth" onClick={handleFav} /> : <img className="c-card__fav" src={FavImg2} alt="hearth" onClick={handleFav} />}</div>;
};

export default Fav;