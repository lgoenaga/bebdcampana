import React from "react";
import { UpdateCiudadano } from "../../services/contactos/contactoupdate";
import "../../css/registrociudadano.css";
import BarraNavegacion from "../../components/header";
import Footer from "../../components/footer";

const ViewUpdateCiudadano = () => {
  return (
    <>
      <BarraNavegacion />
      <UpdateCiudadano />
      <Footer />
    </>
  );
};

export default ViewUpdateCiudadano;
