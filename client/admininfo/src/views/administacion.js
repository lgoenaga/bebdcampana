import React from "react";
import logo from "../img/logo.png";
import "../css/administracion.css";

const ViewAdministracion = () => {
  return (
    <>
      <div className="container">
        <h3 className="titulo">Vista de administracion</h3>
        
        <img className="BrandLogo " src={logo} alt="Logo" height="150" />
      </div>
    </>
  );
};

export default ViewAdministracion;
