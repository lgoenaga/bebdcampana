import React from "react";
import { Routes, Route} from "react-router-dom";

import BarraNavegacion from "./header";
import Administracion from "../routes/administracion";
import RegistroCiudadano from "./contactos/contactocrear";
import LugarVotacioin from "../routes/lugarvotacion";
import Contactos from "../routes/contactos";
import Asistencia from "../routes/asistencia";


import Footer from "./footer";
import "../App.css";

const Rutas = () => {
  return (
    <>
      <div className="container-app">
        <BarraNavegacion />

        <Routes>
          <Route exact path="/" element={<Administracion />} />
          <Route exact path="/contactos/crear" element={<RegistroCiudadano />} />
          <Route exact path="/lugarvotacion" element={<LugarVotacioin />} />
          <Route exact path="/contactos" element={<Contactos />} />
          <Route exact path="/asistencia" element={<Asistencia />} />

        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default Rutas;
