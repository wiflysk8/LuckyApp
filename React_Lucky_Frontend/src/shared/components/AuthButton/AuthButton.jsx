import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IsLoggedContext } from "../../contexts/IsLoggedContext";
import { getCookieUtil } from "../../utils/getCookieUtil";
import { removeCookieUtil } from "../../utils/removeCookieUtil";
import "./AuthButton.scss";

export default function AuthButton() {
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);
  let history = useHistory();
  const stringUser = getCookieUtil("user");
  const user = JSON.parse(stringUser ? stringUser : "{}");

  const signOut = () => {
    removeCookieUtil("user");
    removeCookieUtil("token");

    setIsLogged(false);
    history.push("/");
  };

  return isLogged ? (
    <div className="c-auth">
      ¡Hola {user.name}!
      <Link to="/login">
        <button className="c-auth__btn" onClick={signOut}>
          Sign out
        </button>
      </Link>
    </div>
  ) : (
    <p className="c-auth__p">¡Hola! para continuar, inicia sesión o crea una cuenta</p>
  );
}
