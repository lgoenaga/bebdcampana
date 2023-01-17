import React from "react";
import { Routes, Route} from "react-router-dom";

import BarraNavegacion from "./header";
import Administracion from "../routes/administracion";
import RegistroCiudadano from "../routes/registro";
import LugarVotacioin from "../routes/lugarvotacion";
import Contactos from "../routes/contactos";
import Asistencia from "../routes/asistencia";

import DatosPersonales from "../components/forms/datospersonales";

import Footer from "./footer";
import "../App.css";

const Rutas = () => {
  return (
    <>
      <div className="container-app">
        <BarraNavegacion />

        <Routes>
          <Route exact path="/" element={<Administracion />} />
          <Route exact path="/registro" element={<RegistroCiudadano />} />
          <Route exact path="/lugarvotacion" element={<LugarVotacioin />} />
          <Route exact path="/contactos" element={<Contactos />} />
          <Route exact path="/asistencia" element={<Asistencia />} />

          <Route exact path="/usuarios/crear" element={<DatosPersonales />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default Rutas;
