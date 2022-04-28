import React from 'react'


export default function Datos({mascotas}) {
  return (
    <div >
    <div >
      {mascotas.map((mascota) => {
        return (
          <div key={JSON.stringify(mascota)}>
            <p>{mascota.especie}</p>
            <p>{mascota.fecha}</p>
            <p>{mascota.sexo}</p>
            <p>{mascota.tamano}</p>
            <p>{mascota.peso}</p>
            <p>Personalidad</p>
            <p>Historia</p>
          </div>
        );
      })}
    </div>
  </div>
);
};