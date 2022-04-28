import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./MascotasDetailPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Datos from "../../shared/components/Datos/Datos";
import Salud from "../../shared/components/Salud/Salud";
import flechaatras from "../../assets/Buscador/flechaatras.png";
import Adopcion from "../../shared/components/Adopcion/Adopcion";
import { Link } from "react-router-dom";
import MachoImg from "../../assets/PerfilAnimales/male.png";
import HembraImg from "../../assets/PerfilAnimales/female.png";
import FavImg from "../../assets/PerfilAnimales/favoritos.png";
//import FavImg2 from "../../assets/PerfilAnimales/favoritos2.png";
import Compartir from "../../assets/PerfilAnimales/compartir.png";

export default function MascotasDetailPage() {
  const url = "https://luismrtinez.com/mascotas";
  const [mascotaDetail, setMascotaDetail] = useState();
  let { name } = useParams("name");

  const [showDetails, setShowDetails] = useState("datos", "salud", "adopcion");
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  useEffect(() => {
    const getMascota = async () => {
      const res = await axios.get(`${url}/${name}`);
      setMascotaDetail(res.data);
    };

    getMascota();
  }, [name]);

  return (
    mascotaDetail && (
      <div>
        <div className="c-detail">
          <Link to="/adopcion">
            <img className="c-detail__arrow" src={flechaatras} alt="icon" />
          </Link>
          <img className="c-detail__img" src={mascotaDetail[0].imagen} alt={mascotaDetail[0].nombre} />
        </div>
        <div className="c-detail__box">
          <div className="c-detail__box__left">
            {mascotaDetail[0].sexo === "Macho" ? <img className="c-detail__box__img" src={MachoImg} alt="icon" /> : <img className="c-detail__box__img" src={HembraImg} alt="icon" />}
            <div className="c-detail__box__middle">
              <p className="c-detail__box__middle__p1">{mascotaDetail[0].nombre}</p>
              <p className="c-detail__box__middle__p2">{mascotaDetail[0].ciudad}</p>
            </div>
          </div>
          <div className="c-detail__box__right">
            <img className="c-detail__box__right__img" src={FavImg} alt="icon" />
            <img className="c-detail__box__right__img" src={Compartir} alt="icon" />
          </div>
        </div>

        <div>
          <div className="c-detail__tag">
            <h4
              className={active ? "c-detail__tag__h4-active" : "c-detail__tag__h4"}
              onClick={() => {
                setShowDetails("datos");
                setActive(true);
                setActive2(false);
                setActive3(false);
              }}
            >
              Datos
            </h4>
            <h4
              className={active2 ? "c-detail__tag__h4-active" : "c-detail__tag__h4"}
              onClick={() => {
                setShowDetails("salud");
                setActive(false);
                setActive2(true);
                setActive3(false);
              }}
            >
              Salud
            </h4>
            <h4
              className={active3 ? "c-detail__tag__h4-active" : "c-detail__tag__h4"}
              onClick={() => {
                setShowDetails("adopcion");
                setActive(false);
                setActive2(false);
                setActive3(true);
              }}
            >
              Adopcion
            </h4>
          </div>
          <div>
            {showDetails === "datos" && <Datos mascotaDetail={mascotaDetail} />}
            {showDetails === "salud" && <Salud mascotaDetail={mascotaDetail} />}
            {showDetails === "adopcion" && <Adopcion mascotaDetail={mascotaDetail} />}
          </div>
        </div>
        <Nav />
      </div>
    )
  );
}
