import React from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UsersPage from "../pages/UsersPage/HelloUser";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import PrivateRoute from "../shared/components/PrivateRoute/PrivateRoute";
import AdopcionPage from "../pages/AdopcionPage/AdopcionPage";
import MapPage from "../pages/MapPage/MapPage";
import MorePage from "../pages/MorePage/MorePage";
import Slider from "../shared/components/Slider/Slider";

const RoutesFile = () => {
  return (
    <div>
      <Switch>
        <Route path="/slider">
          <Slider />
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/adopcion">
          <AdopcionPage />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/users">
          <UsersPage />
        </PrivateRoute>
        <PrivateRoute path="/map">
          <MapPage />
        </PrivateRoute>
        <PrivateRoute path="/mas">
          <MorePage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect from="/" to="slider" />
      </Switch>
    </div>
  );
};

export default RoutesFile;
