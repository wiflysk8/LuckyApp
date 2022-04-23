import React from "react";
import Nav from "../../shared/components/Nav/Nav";
import profileImg from "../../assets/Perfil/profile.jpg";
import { getCookieUtil } from "../../shared/utils/getCookieUtil";
import "./ProfilePage.scss";

export default function ProfilePage() {
  const stringUser = getCookieUtil("user");
  const user = JSON.parse(stringUser ? stringUser : "{}");

  return (
    <section className="c-profile">
      <div className="c-profile-header">
        <img className="c-profile-header__img" src={profileImg} alt="avatar" />
      </div>
      <div className="c-profile-top">
        <div className="c-profile-top__button">
          <div className="c-profile-top__button__left"></div>
        </div>
        <div className="c-profile-top__button"></div>
        <div className="c-profile-top__button"></div>
        <div className="c-profile-top__button"></div>
      </div>
      <div className="c-profile-bottom">
        <div className="c-profile-top__button"></div>
        <div className="c-profile-top__button"></div>
        <div className="c-profile-top__button"></div>
      </div>
      <Nav />
    </section>
  );
}
