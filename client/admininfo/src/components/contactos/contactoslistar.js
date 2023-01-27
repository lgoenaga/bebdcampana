import { useState, useEffect } from "react";
import { listCiudadanos } from "../../services/contactos";
import TableContactos from "../forms/contactoslistar";

import "../../css/contactos.css";

export const ListCiudadanos = () => {
  const [ciudadanos, setCiudadanos] = useState([]);

  const mostrarCiudadanos = async () => {
    try {
      const { data } = await listCiudadanos();
      setCiudadanos(data);
    } catch (error) {
      console.log("Error desde el servidor verificar backend ", error);
    }
  };

  useEffect(() => {
    mostrarCiudadanos();
  }, []);

  const DataTable = () => {
    let noReg = 1;

    return ciudadanos.map((res, i) => {
      res.noReg = noReg++;
      return <TableContactos obj={res} key={i} />;
    });
  };

  return (
    <div>
      <table className="table border-primary table-info table-hover table-striped">
        <thead className="table-group-divider">
          <tr className="table-warning">
            <th scope="col">#</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Primer Nombre</th>
            <th scope="col">Primer Apellido</th>
            <th scope="col">Fecha Nacimiento</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{DataTable()}</tbody>
      </table>
    </div>
  );
};
