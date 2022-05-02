import "./AlreadyAdopted.scss";
import foto1 from "../../../assets/Alerts/alert1.png";
import { Link } from "react-router-dom";

const Advertencia = ({ mascotaDetail }) => {
  return (
    <div className="c-already">
      <h1 className="c-already__title">
        ¡Vaya! <br /> Parece que ya has solicitado la adopción de esta mascota.
      </h1>
      <img className="c-already__img" src={foto1} alt="" />
      <h3 className="c-already__subtitle">Comprueba el estado de la adopción.</h3>
      <Link to="/estado">
        <button className="c-already__boton">Ver estado</button>
      </Link>
    </div>
  );
};

export default Advertencia;
