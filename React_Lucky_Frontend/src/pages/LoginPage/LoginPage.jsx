import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IsLoggedContext } from "../../shared/contexts/IsLoggedContext";
import { API } from "../../shared/services/api";
import { Link } from "react-router-dom";
import logo from "../../assets/Logotipo/tituloLucky2.png";
import eye from "../../assets/Login/eye.png";
import "./LoginPage.scss";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { setIsLogged } = useContext(IsLoggedContext);
  let history = useHistory();

  const onSubmit = (formData) => {
    API.post("login", formData).then((res) => {
      document.cookie = "token=" + res.data.token;
      document.cookie = "user=" + JSON.stringify(res.data.user);
      setIsLogged(true);
      history.push("/home");
    });
  };

  return (
    <section className="c-login">
      <AuthButton />
      <div className="c-login-header">
        <img className="c-login-header__logo" src={logo} alt="logo" />
      </div>
      <form className="c-login-form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="email"></label>
        <input className="c-login-form__input" placeholder="E-mail" type="mail" name="email" id="email" defaultValue="lucky@lucky.com" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="password"></label>
        <input
          className="c-login-form__input"
          name="password"
          placeholder="Password"
          id="password"
          type="password"
          defaultValue={"Prueba123"}
          ref={register({
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
        />{" "}
        <img className="c-login-form__eye" src={eye} alt="eye img" />
        <p className="c-login-form__pwd">¿Has olvidado tu contraseña?</p>
        {/* errors will return when field validation fails  */}
        {/*{errors.exampleRequired && <span>This field is required</span>}*/}
        <button className="c-login-form__btn" type="submit">
          Iniciar sesión
        </button>
        <Link to="/register" className="c-login-link">
          <button className="c-login-form__btn c-login-form__btn--white ">Crear cuenta</button>
        </Link>
      </form>
    </section>
  );
}
