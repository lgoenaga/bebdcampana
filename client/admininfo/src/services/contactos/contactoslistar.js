import { useState, useEffect } from "react";
import { listCiudadanos } from "../../routes/contactos";
import TableContactos from "./contactostable";
import Swal from "sweetalert2";

import "../../css/registrociudadano.css"

import { AuthHeaders } from "../../components/authheader";


export const ListCiudadanos = () => {
  
  const [ciudadanos, setCiudadanos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageActual, setPageActual] = useState(1);

useEffect(() => {
  const mostrarCiudadanos = async () => {
    try {
      const authheader = AuthHeaders();
      const { data } = await listCiudadanos(authheader);
      setCiudadanos(data);
    } catch (error) {
      console.log("Error desde el servidor verificar backend ", error);
    }
  };

     Swal.fire({
       icon: "info",
       title: "Listando contactos",
       showConfirmButton: false,
       timer: 1000,
       didOpen: () => {
         Swal.showLoading();
       },
     });
     setTimeout(() => {
       Swal.close();
       mostrarCiudadanos();
     }, 1000);


  
}, []);

const btnnext = document.getElementById("btn-next");
const btnpreview = document.getElementById("btn-preview");
let page = ciudadanos.length / 12;

if (page - Math.trunc(page) > 0) {
  page = Math.trunc(page) + 1;
}

const nextPage = () => {
  if (page > pageActual) {
    setPageActual(pageActual + 1);
    setCurrentPage(currentPage + 12);
    btnpreview.disabled = false;
    btnnext.disabled = false;
    console.log(pageActual);
  } else {
    btnnext.disabled = true;
    btnpreview.disabled = false;
  }
};

const previewPage = () => {
  console.log(pageActual);
  if (pageActual > 1) {
    setPageActual(pageActual - 1);
    setCurrentPage(currentPage - 12);
    btnnext.disabled = false;
    btnpreview.disabled = false;
    console.log(pageActual);
  } else {
    btnnext.disabled = false;
    btnpreview.disabled = true;
  }
};


  const DataTable = () => {
    let noReg = 1;

    return ciudadanos.map((res, i) => {
      res.noReg = noReg++;
      return <TableContactos obj={res} key={i} />;
    });
  };

  return (
    <div>
      <div className="paginacion">
        <button
          className="btn btn-primary btn-preview"
          id="btn-preview"
          onClick={previewPage}
        >
          preview
        </button>
        &nbsp;
        <p>
          Pagina {pageActual} de {page}
        </p>
        &nbsp;
        <button className="btn btn-primary" id="btn-next" onClick={nextPage}>
          next
        </button>
      </div>
      <table className="table border-primary table-hover table-contactos">
        <thead className="table-group-divider">
          <tr className="table-info">
            <th scope="col" className="col-contactos">
              #
            </th>
            <th scope="col" className="col-contactos">
              Identificacion
            </th>
            <th scope="col" className="col-contactos">
              Primer Nombre
            </th>
            <th scope="col" className="col-contactos">
              Primer Apellido
            </th>
            <th scope="col" className="col-contactos">
              Fecha Nacimiento
            </th>
            <th scope="col" className="col-contactos">
              Acción
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{DataTable()}</tbody>
      </table>
    </div>
  );
};
