import Nav from "../../shared/components/Nav/Nav";
import "./MapPage.scss";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100vw",
  height: "81vh",
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
        <div className="c-map__googleMaps">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        <Nav />
      </div>
    </section>
  );
};

export default React.memo(MapPage);
