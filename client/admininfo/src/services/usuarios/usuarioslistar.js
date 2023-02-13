import { useState, useEffect } from "react";
import { listUsuarios } from "../../routes/usuarios";
import { AuthHeaders } from "../../components/authheader"

import TableUsuarios from "./usuariostable";

export const ListUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const mostrarUsuarios = async () => {
      try {
        const authheader = AuthHeaders();
        let { data } = await listUsuarios(authheader);
        setUsuarios(data);
      } catch (error) {
        console.log(
          "Error desde el servidor verificar backend  listar usuarios",
          error
        );
      }
    };

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
      <table className="table border-primary  table-hover">
        <thead className="table-group-divider">
          <tr className="table-info">
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{DataTable()}</tbody>
      </table>
    </div>
  );
};
