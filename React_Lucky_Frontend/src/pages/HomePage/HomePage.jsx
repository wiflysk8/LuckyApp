import React from "react";
import { getCookieUtil } from "../../shared/utils/getCookieUtil";
import Nav from "../../shared/components/Nav/Nav";
import "./HomePage.scss";

export default function HomePage() {
  const stringUser = getCookieUtil("user");
  const user = JSON.parse(stringUser ? stringUser : "{}");
  return (
    <section className="c-home">
      <h2>¡Hola {user.name}!</h2>
      <Nav />
    </section>
  );
}
