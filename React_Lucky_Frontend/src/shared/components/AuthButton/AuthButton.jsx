import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import "./AuthButton.scss";

export default function AuthButton() {
  const { jwt, setJwt } = useContext(JwtContext);
  let navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/");
  };

  return jwt ? (
    <div className="c-auth">
      <Link to="/login">
        <button className="c-auth__btn" onClick={signOut}></button>
      </Link>
    </div>
  ) : (
    <p className="c-auth__p">¡Hola! para continuar, inicia sesión o crea una cuenta</p>
  );
}
