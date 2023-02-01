import React from "react";

import { CrearRegistroUsuario } from "../../services/usuarios/usuariocrear";
import BarraNavegacion from "../../components/header";
import Footer from "../../components/footer";

import "../../css/registrociudadano.css";

const ViewCrearUsuario = () => {
  return (
    <>
      <BarraNavegacion />
      <CrearRegistroUsuario />
      <Footer />
    </>
  );
};

export default ViewCrearUsuario;
