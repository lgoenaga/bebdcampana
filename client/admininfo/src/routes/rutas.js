import React from "react";
import { Routes, Route } from "react-router-dom";

import BarraNavegacion from "../components/header";
import Administracion from "../services/administracion";
import RegistroCiudadano from "../services/contactos/contactocrear";
import UpdateRegistroCiudadano from "../services/contactos/contactoupdate";
import LugarVotacioin from "../services/lugarvotacion";
import Contactos from "../services/contactos/contactos";
import Asistencia from "../services/asistencia";
import FormLogin from "../services/login";

import Footer from "../components/footer";
import "../App.css";

const Rutas = () => {
  return (
    <>
      <div className="container-app">
        <BarraNavegacion />

        <Routes>
          <Route exact path="/" element={<Administracion />} />
          <Route
            exact
            path="/contactos/crear"
            element={<RegistroCiudadano />}
          />
          <Route
            exact
            path="/contactos/:documentoId"
            element={<UpdateRegistroCiudadano />}
          />
          <Route exact path="/lugarvotacion" element={<LugarVotacioin />} />
          <Route exact path="/contactos" element={<Contactos />} />
          <Route exact path="/asistencia" element={<Asistencia />} />
          <Route exact path="/login" element={<FormLogin/>}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default Rutas;
