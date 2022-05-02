import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import arrow from "../../../assets/Buscador/flechaatras.png";
import AdopcionSection from "../AdopcionSection/AdopcionSection";
import InfoAdiccional from "../InfoAdiccional/InfoAdiccional";
import Resumen from "../Resumen/Resumen";
import "./AdopcionDetail.scss";

const AdopcionDetail = () => {
  const [mascotaDetail, setMascotaDetail] = useState();
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [showDetails, setShowDetails] = useState("resumen", "infoAdiccional", "adopcion");

  let { nombre } = useParams("nombre");
  useEffect(() => {
    const getMascota = async () => {
      const res = await axios.get(`http://localhost:5000/mascotas/${nombre}`);
      setMascotaDetail(res.data);
    };

    getMascota();
  }, [nombre]);

  return (
    <section className="c-adopcionDetail">
      {mascotaDetail && (
        <>
          <div className="c-estado-adopcionDetail__title">
            <Link className="c-estado-adopcionDetail__link" to="/estado">
              <img className="c-estado__arrow" src={arrow} alt="flecha" />
              <p>Adopción de {mascotaDetail.nombre}</p>
            </Link>
          </div>
          <div className="c-estado-adopcionDetail__sections">
            <h3
              className={active ? "c-estado-adopcionDetail__sections__title c-estado-adopcionDetail__sections__title--active" : "c-estado-adopcionDetail__sections__title"}
              onClick={() => {
                setShowDetails("resumen");
                setActive(true);
                setActive2(false);
                setActive3(false);
              }}
            >
              Resumen
            </h3>
            <h3
              className={active2 ? "c-estado-adopcionDetail__sections__title c-estado-adopcionDetail__sections__title--active" : "c-estado-adopcionDetail__sections__title"}
              onClick={() => {
                setShowDetails("infoAdiccional");
                setActive(false);
                setActive2(true);
                setActive3(false);
              }}
            >
              Info adiccional
            </h3>
            <h3
              className={active3 ? "c-estado-adopcionDetail__sections__title c-estado-adopcionDetail__sections__title--active" : "c-estado-adopcionDetail__sections__title"}
              onClick={() => {
                setShowDetails("adopcion");
                setActive(false);
                setActive2(false);
                setActive3(true);
              }}
            >
              Adopcion
            </h3>
          </div>
          {showDetails === "resumen" && <Resumen mascotaDetail={mascotaDetail} />}
          {showDetails === "infoAdiccional" && <InfoAdiccional mascotaDetail={mascotaDetail} />}
          {showDetails === "adopcion" && <AdopcionSection mascotaDetail={mascotaDetail} />}
        </>
      )}
    </section>
  );
};

export default AdopcionDetail;
