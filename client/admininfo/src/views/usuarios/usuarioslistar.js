import React from "react";
import { ListUsuarios } from "../../services/usuarios/usuarioslistar";
import BarraNavegacion from "../../components/header";
import Footer from "../../components/footer";
import paginationBasic from "../../components/page";

paginationBasic();

const ViewUsuarios = () => {
  return (
    <>
      <BarraNavegacion />

      <ListUsuarios />

      <Footer />
    </>
  );
};

export default ViewUsuarios;
