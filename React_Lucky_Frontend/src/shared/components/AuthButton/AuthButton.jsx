import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";

import { removeCookieUtil } from "../../utils/removeCookieUtil";
import "./AuthButton.scss";

export default function AuthButton() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);
  let history = useHistory();

  const signOut = () => {
    removeCookieUtil("user");
    removeCookieUtil("token");

    setIsLogged(false);
    history.push("/");
  };

  return isLogged ? (
    <div className="c-auth">
      <Link to="/login">
        <button className="c-auth__btn" onClick={signOut}></button>
      </Link>
    </div>
  ) : (
    <p className="c-auth__p">¡Hola! para continuar, inicia sesión o crea una cuenta</p>
  );
}
