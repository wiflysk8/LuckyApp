import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./MascotasDetailPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MascotasDetailPage() {
  const url = "https://luismrtinez.com/mascotas";
  const [mascotaDetail, setMascotaDetail] = useState();
  let { name } = useParams("name");

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
        <h1>{mascotaDetail[0].nombre}</h1>
        <Nav />
      </div>
    )
  );
}
