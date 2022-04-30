import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";
import logo from "../../assets/Logotipo/tituloLucky2.png";
import eye from "../../assets/Login/eye.png";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // const user = {
  //     name: 'Abel',
  //     username: 'abelcabezaroman',
  //     email: 'contacto@abelcabezaroman.com',
  //     password: 'ABCedf123'
  // }

  const onSubmit = (formData) => {
    API.post("users/register", formData).then((res) => {
      console.log("Register user");
      navigate("/login");
    });
  };

  return (
    <section className="c-register">
      <AuthButton />
      <div className="c-register-header">
        <Link className="c-register-link" to="/welcome">
          <img className="c-register-header__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <form className="c-register-form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <input className="c-register-form__input" placeholder="Name" id="name" defaultValue="" {...register("name", { required: true })} />

        {/*<input name="role" id="role" defaultValue="admin"*/}
        {/*       ref={register({ required: true })}/>*/}

        <input className="c-register-form__input" placeholder="Email" id="email" defaultValue="" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />

        {/*<label htmlFor="username">Username</label>*/}
        {/*<input name="username" id="username" defaultValue="abelcabezaroman"*/}
        {/*       ref={register({ required: true, minLength: 4 })}/>*/}

        {/* include validation with required or other standard HTML validation rules */}

        <input
          className="c-register-form__input"
          placeholder="Password"
          name="password"
          id="password"
          type="password"
          defaultValue=""
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })}
        />
        <img className="c-register-form__eye" src={eye} alt="eyeimage" />
        {/* errors will return when field validation fails  */}
        {/*{errors.exampleRequired && <span>This field is required</span>}*/}

        <button className="c-register-form__btn" clastype="submit" value="Register">
          Registrarse
        </button>
      </form>
    </section>
  );
}
