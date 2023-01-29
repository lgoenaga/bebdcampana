import { useState, useEffect } from "react";
import { listUsuarios } from "../../routes/usuarios";

import "../../css/contactos.css";
import TableUsuarios from "./usuariostable";

export const ListUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const mostrarUsuarios = async () => {
    try {
      const { data } = await listUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.log("Error desde el servidor verificar backend ", error);
    }
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  const DataTable = () => {
    let noReg = 1;

    return usuarios.map((res, i) => {
      res.noReg = noReg++;
      return <TableUsuarios obj={res} key={i} />;
    });
  };

  return (
    <div>
      <table className="table border-primary table-info table-hover table-striped">
        <thead className="table-group-divider">
          <tr className="table-warning">
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{DataTable()}</tbody>
      </table>
    </div>
  );
};
