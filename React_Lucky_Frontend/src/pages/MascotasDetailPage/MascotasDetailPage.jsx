import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./MascotasDetailPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Datos from "../../shared/components/Datos/Datos";
import Salud from "../../shared/components/Salud/Salud";
import flechaatras from "../../assets/Buscador/flechaatras.png";


export default function MascotasDetailPage() {
  const url = "http://localhost:3030/mascotas";
  const [mascotaDetail, setMascotaDetail] = useState();
  let { name } = useParams("name");
  const [showDetails, setShowDetails] = useState(true);

 
  
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
      <div className="c-detailImageBox">
      
      <div className="c-profile-top__button__left">
          <img className="c-profile-top__button__left__img" src={flechaatras} alt="icon" />
        </div>
      <img
              className="c-profileImage"
              src={mascotaDetail[0].imagen}
              alt={mascotaDetail[0].nombre}
            />
      </div>
        <h1>{mascotaDetail[0].nombre}</h1>
        <h3>{mascotaDetail[0].ciudad}</h3>
    
        {/* <div >
            <button
              onClick={() => setShowDetails(true)}
            >
              Datos
            </button>
            <button
              onClick={() => setShowDetails(false)}
            >
              Salud
            </button>
            </div>
      <div>
        {showDetails ? (
          <Datos datos={datos} />
        ) : (
          <Salud salud={salud} />

        )}
      </div> */}
      <div className="btn">
      <button className="btn__1">Apadrinar</button>
      <button className="btn__2">Adoptar</button>
      </div>
        <Nav />
        
      </div>
    )
  );
    }
