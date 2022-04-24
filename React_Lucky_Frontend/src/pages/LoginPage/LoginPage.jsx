import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { API } from "../../shared/services/api";
import { Link } from "react-router-dom";
import logo from "../../assets/Logotipo/tituloLucky2.png";
import eye from "../../assets/Login/eye.png";
import "./LoginPage.scss";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setJwt(true);
      navigate("/home");
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
        <input className="c-login-form__input" id="email" defaultValue="lucky@lucky.com" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="password"></label>
        <input
          className="c-login-form__input"
          id="password"
          type="password"
          defaultValue={"Prueba123"}
          {...register("password", {
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
