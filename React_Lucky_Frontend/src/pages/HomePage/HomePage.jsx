import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import "./HomePage.scss";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <section className="c-home">
      <h2>¡Hola {user.name}!</h2>
      <Nav />
    </section>
  );
}
