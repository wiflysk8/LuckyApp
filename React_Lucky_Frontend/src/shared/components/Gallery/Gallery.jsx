import React from "react";
import Card from "../Card/Card";
import "./Gallery.scss";

const Gallery = ({ mascotas }) => {
  console.table(mascotas);
  return (
    <div className="c-gallery">
      {mascotas.map((mascota) => (
        <Card key={mascota._id} mascota={mascota} />
      ))}
    </div>
  );
};

export default Gallery;
