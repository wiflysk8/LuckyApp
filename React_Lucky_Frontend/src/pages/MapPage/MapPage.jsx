import Nav from "../../shared/components/Nav/Nav";
import "./MapPage.scss";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import CustomPopup from "../../shared/components/CustomPopup/CustomPopup";
import { useState } from "react";
import PopMaps from "../../shared/components/PopMaps/PopMaps";

const containerStyle = {
  width: "100vw",
  height: "81vh",
};

const center = {
  lat: 43.36,
  lng: -8.4,
};

const MapPage = () => {

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };


  return (
    <section className="c-map">
      <div className="c-map__div">
        <input type="text" className="c-map__input" placeholder="¿Qué estás buscando?" />
        <img className="c-map__logo" src={SearchLogo} alt="lupa" />
        <img className="c-map__logo c-map__logo--filter" src={Filter} alt="lupa" onClick={(e) => {
              setVisibility(!visibility);
              e.preventDefault();
              //navigate("/estado");
              //window.location.reload();
            }} />
        <div className="c-map__googleMaps">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        <Nav />
        <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
            <PopMaps />
        </CustomPopup>
      </div>
    </section>
  );
};

export default React.memo(MapPage);
