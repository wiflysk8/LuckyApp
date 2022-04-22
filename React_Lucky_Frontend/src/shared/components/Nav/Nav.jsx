import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import homePrimary from "../../../assets/home2.png";
import homeSecondary from "../../../assets/home1.png";
import mapPrimary from "../../../assets/map2.png";
import mapSecondary from "../../../assets/map1.png";
import petPrimary from "../../../assets/pet2.png";
import petSecondary from "../../../assets/pet1.png";
import profileImg from "../../../assets/profile.jpg";
import moreSecondary from "../../../assets/mas1.png";
import morePrimary from "../../../assets/mas2.png";
import "./Nav.scss";

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="c-navbar">
        {location.pathname === "/home" ? (
          <img className="c-navbar__icon" src={homeSecondary} alt="home" />
        ) : (
          <NavLink className="NavLink" to="/home">
            <img className="c-navbar__icon" src={homePrimary} alt="home" />
          </NavLink>
        )}

        {location.pathname === "/adopcion" ? (
          <img className="c-navbar__icon" src={petSecondary} alt="home" />
        ) : (
          <NavLink to="/adopcion">
            <img className="c-navbar__icon" src={petPrimary} alt="home" />
          </NavLink>
        )}

        {location.pathname === "/map" ? (
          <img className="c-navbar__icon" src={mapSecondary} alt="home" />
        ) : (
          <NavLink to="/map">
            <img className="c-navbar__icon" src={mapPrimary} alt="home" />
          </NavLink>
        )}

        {location.pathname === "/profile" ? (
          <img className="c-navbar__img c-navbar__img--active" src={profileImg} alt="home" />
        ) : (
          <NavLink to="/profile">
            <img className="c-navbar__img" src={profileImg} alt="home" />
          </NavLink>
        )}

        {location.pathname === "/mas" ? (
          <img className="c-navbar__icon" src={moreSecondary} alt="home" />
        ) : (
          <NavLink to="/mas">
            <img className="c-navbar__icon" src={morePrimary} alt="home" />
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Nav;
