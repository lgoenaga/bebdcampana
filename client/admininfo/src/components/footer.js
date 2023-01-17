import React from "react";
import "../css/footer.css";

let correo = "luisgoenagap@gmail.com";
let names = "Luis Alberto Goenaga Peláez";

function Footer() {
  return (
    <>
      <footer className="footer-app">
        <span className="creator">
          <p>Pagina Elaborada por : {names}</p>
          <p>correo electronico : {correo}</p>
          <p>Todos los derechos reservados</p>
        </span>
      </footer>
    </>
  );
}

export default Footer;
