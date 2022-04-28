import React from 'react'


export default function Adopcion({mascotas}) {
  return (
    <div >
    <div >
      {mascotas.map((mascota) => {
        return (
          <div key={JSON.stringify(mascota)}>
            <p>Requisitos adopción 
            {mascota.requisitos}</p>
            <p>Tasa de adopción
            {mascota.tasa}</p>
            <p>¿Se envía a otra ciudad?
            {mascota.envio}</p>
          </div>
        );
      })}
    </div>
  </div>
);
};