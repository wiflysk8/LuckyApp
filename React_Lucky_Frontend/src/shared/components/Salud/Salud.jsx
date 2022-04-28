import React from 'react'


export default function Salud({mascotas}) {
  return (
    <div >
    <div >
      {mascotas.map((mascota) => {
        return (
          <div key={JSON.stringify(mascota)}>
            <p>{mascota.vacunado}</p>
            <p>{mascota.desparasitado}</p>
            <p>{mascota.sano}</p>
            <p>{mascota.esterilizado}</p>
            <p>{mascota.identificado}</p>
            <p>{mascota.microchip}</p>
            <p>Tienes que saber que</p>
          </div>
        );
      })}
    </div>
  </div>
);
};