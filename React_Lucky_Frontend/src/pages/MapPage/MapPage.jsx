import Nav from "../../shared/components/Nav/Nav";
import "./MapPage.scss";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "415px",
  height: "700px",
};

const center = {
  lat: 43.36,
  lng: -8.4,
};

const MapPage = () => {
  return (
    <section className="c-map">
      <div className="c-map__div">
        <input type="text" className="c-map__input" placeholder="¿Qué estás buscando?" />
        <img className="c-map__logo" src={SearchLogo} alt="lupa" />
        <img className="c-map__logo c-map__logo--filter" src={Filter} alt="lupa" />
        <LoadScript googleMapsApiKey="AIzaSyDv2W4zkf-OMEH7-arAoe55APu-U0JX-ZU">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
        <Nav />
      </div>
    </section>
  );
};

export default React.memo(MapPage);
