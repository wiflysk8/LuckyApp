import React from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UsersPage from "../pages/UsersPage/HelloUser";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import HomePage from "../pages/HomePage/HomePage";
import PrivateRoute from "../shared/components/PrivateRoute/PrivateRoute";

const RoutesFile = () => {
  return (
    <div>
      <Switch>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <PrivateRoute path="/home">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/users">
          <UsersPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect from="/" to="welcome" />
      </Switch>
    </div>
  );
};

export default RoutesFile;
