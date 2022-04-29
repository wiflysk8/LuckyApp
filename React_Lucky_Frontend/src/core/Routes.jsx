import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UsersPage from "../pages/UsersPage/HelloUser";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import HomePage from "../pages/HomePage/HomePage";
import RequireAuth from "../shared/components/RequireAuth/RequireAuth";
import AdopcionPage from "../pages/AdopcionPage/AdopcionPage";
import MapPage from "../pages/MapPage/MapPage";
import MorePage from "../pages/MorePage/MorePage";
import Slider from "../shared/components/Slider/Slider";
import MascotasDetailPage from "../pages/MascotasDetailPage/MascotasDetailPage";
import Advertencia from "../shared/components/Advertencia/Advertencia";
import Enviado from "../shared/components/Enviado/Enviado";
import FormPage from "../pages/FormPage/FormPage";
import EditProfile from "../shared/components/EditProfile/EditProfile";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/slider" element={<Slider />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/users"
        element={
          <RequireAuth>
            <UsersPage />
          </RequireAuth>
        }
      />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/adopcion"
        element={
          <RequireAuth>
            <AdopcionPage />
          </RequireAuth>
        }
      />
      <Route
        path="/mascotas/:name"
        element={
          <RequireAuth>
            <MascotasDetailPage />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route
        path="/edit"
        element={
          <RequireAuth>
            <EditProfile />
          </RequireAuth>
        }
      />
      <Route
        path="/map"
        element={
          <RequireAuth>
            <MapPage />
          </RequireAuth>
        }
      />
      <Route
        path="/mas"
        element={
          <RequireAuth>
            <MorePage />
          </RequireAuth>
        }
      />
      <Route
        path="/advertencia"
        element={
          <RequireAuth>
            <Advertencia />
          </RequireAuth>
        }
      />
      <Route
        path="/formulario"
        element={
          <RequireAuth>
            <FormPage />
          </RequireAuth>
        }
      />
      <Route
        path="/enviado"
        element={
          <RequireAuth>
            <Enviado />
          </RequireAuth>
        }
      />
      <Route path="/" element={<Navigate to="/slider" />} />
    </Routes>
  );
};

export default RoutesFile;
