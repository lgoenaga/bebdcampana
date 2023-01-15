import React from "react";

let correo = "luisgoenagap@gmail.com";
let names = "Luis Alberto Goenaga Peláez";

function Footer(){
  return (
    <>
      <footer className="footer-app">
        <div className="row-footer">
          <p>Pagina Elaborada por : {names}</p>
          <p>correo electronico : {correo}</p>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
