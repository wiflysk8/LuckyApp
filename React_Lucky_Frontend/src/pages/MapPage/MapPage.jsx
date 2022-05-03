import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Nav from "../../shared/components/Nav/Nav";
import "./MapPage.scss";
import SearchLogo from "../../assets/Buscador/lupa.png";
import Filter from "../../assets/Buscador/filtro.png";
import React from "react";
import CustomPopup from "../../shared/components/CustomPopup/CustomPopup";
import PopMaps from "../../shared/components/PopMaps/PopMaps";

const containerStyle = {
  width: "100vw",
  height: "80vh",
};

export default function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  useEffect(() => setIsMounted(true), []);
  const [isMounted, setIsMounted] = useState(false);
  const center = useMemo(() => ({ lat: 43.379360060003386, lng: -8.403517647434645 }), []);
  const centerTest = useMemo(() => ({ lat: 43.377253666540504, lng: -8.400231913407705 }), []);
  const centerTest2 = useMemo(() => ({ lat: 43.376253666540504, lng: -8.400231913407705 }), []);
  const centerTest3 = useMemo(() => ({ lat: 43.377253666540504, lng: -8.402231913407705 }), []);

  return (
    <section className="c-map">
      <div className="c-map__div">
        <input type="text" className="c-map__input" placeholder="¿Qué estás buscando?" />
        <img className="c-map__logo" src={SearchLogo} alt="lupa" />
        <img
          className="c-map__logo c-map__logo--filter"
          src={Filter}
          alt="lupa"
          onClick={(e) => {
            setVisibility(!visibility);
            e.preventDefault();
          }}
        />
        <div className="c-map__googleMaps"></div>
        <GoogleMap zoom={13} center={center} mapContainerStyle={containerStyle}>
          {isMounted && <Marker position={center} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"} />}
          {isMounted && <Marker position={centerTest} icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} />}
          {isMounted && <Marker position={centerTest2} icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"} />}
          {isMounted && <Marker position={centerTest3} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />}
        </GoogleMap>
      </div>
      <Nav />
      <CustomPopup onClose={popupCloseHandler} show={visibility} title="">
        <PopMaps setVisibility={setVisibility} />
      </CustomPopup>
    </section>
  );
}
