import React from "react";
import AuthButton from "../../shared/components/AuthButton/AuthButton";
import Nav from "../../shared/components/Nav/Nav";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="c-home">
      <AuthButton />
      <Nav />
      HOMEPAGE
    </section>
  );
}
