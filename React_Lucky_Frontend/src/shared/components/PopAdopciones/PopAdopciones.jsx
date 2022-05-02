import "./PopAdopciones.scss";
import Completado from "../../../assets/Filtros/completado.png";
import Completado2 from "../../../assets/Filtros/completado2.png";
import Enproceso from "../../../assets/Filtros/enproceso.png";
import Enproceso2 from "../../../assets/Filtros/enproceso2.png";
import Rechazado from "../../../assets/Filtros/rechazado.png";
import Rechazado2 from "../../../assets/Filtros/rechazado2.png";
import React, { useState } from "react";

const PopAdopciones = ({ setVisibility }) => {
  const [completado, setCompletado] = useState(true);
  const [enproceso, setEnproceso] = useState(true);
  const [rechazado, setRechazado] = useState(true);

  const handleCompletado = () => {
    setCompletado(!completado);
  };

  const handleEnproceso = () => {
    setEnproceso(!enproceso);
  };

  const handleRechazado = () => {
    setRechazado(!rechazado);
  };

  const handleChangeEstadoAdopcion = () => {
    setVisibility(false);
  };

  const handleReset = () => {
    setCompletado(true);
    setEnproceso(true);
    setRechazado(true);
  };

  return (
    <div className="c-popadopciones">
      <h1 className="c-popadopciones__title">Filtros</h1>
      <div className="c-popadopciones__container">
        {completado ? (
          <div className="c-popadopciones__box" onClick={handleCompletado}>
            <img className="c-popadopciones__box__img" src={Completado} alt="completado" />
            <p className="c-popadopciones__box__text">Completado</p>
          </div>
        ) : (
          <div className="c-popadopciones__box__rosa" onClick={handleCompletado}>
            <img className="c-popadopciones__box__img" src={Completado2} alt="completado2" />
            <p className="c-popadopciones__box__text__rosa">Completado</p>
          </div>
        )}
        {enproceso ? (
          <div className="c-popadopciones__box" onClick={handleEnproceso}>
            <img className="c-popadopciones__box__img" src={Enproceso} alt="enproceso" />
            <p className="c-popadopciones__box__text">En proceso</p>
          </div>
        ) : (
          <div className="c-popadopciones__box__rosa" onClick={handleEnproceso}>
            <img className="c-popadopciones__box__img" src={Enproceso2} alt="enproceso2" />
            <p className="c-popadopciones__box__text__rosa">En proceso</p>
          </div>
        )}
        {rechazado ? (
          <div className="c-popadopciones__box" onClick={handleRechazado}>
            <img className="c-popadopciones__box__img" src={Rechazado} alt="rechazado" />
            <p className="c-popadopciones__box__text">Rechazado</p>
          </div>
        ) : (
          <div className="c-popadopciones__box__rosa" onClick={handleRechazado}>
            <img className="c-popadopciones__box__img" src={Rechazado2} alt="rechazado2" />
            <p className="c-popadopciones__box__text__rosa">Rechazado</p>
          </div>
        )}
      </div>
      {!completado || !enproceso || !rechazado ? (
        <div className="c-popmaps__buttons">
          <button
            className="c-popmaps__buttons__btn c-popmaps__buttons__btn--inverted"
            onClick={() => {
              handleReset();
            }}
          >
            Borrar filtros
          </button>

          <button className="c-popmaps__buttons__btn" onClick={handleChangeEstadoAdopcion}>
            Aceptar
          </button>
        </div>
      ) : (
        <button className="c-popmaps__btn" onClick={handleChangeEstadoAdopcion}>
          Aplicar
        </button>
      )}
    </div>
  );
};

export default PopAdopciones;
