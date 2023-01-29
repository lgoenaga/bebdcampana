import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import { deleteUsuario } from "../../routes/usuarios";

const TableUsuarios = (props) => {
  const { noReg, user, rol, estado } =
    props.obj;

  const navigate = useNavigate();

  const borrarUsuario = async () => {
    let data = "";

    try {
      data = await deleteUsuario(user);

      console.log("Usuario Eliminado");
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log("Usuario no se ha podido eliminar", error);
    }
  };

  return (
    <>
      <tr>
        <td>{noReg}</td>
        <td>{user}</td>
        <td>{rol}</td>
        <td>{estado}</td>

        <td>
          <Button variant="danger" onClick={borrarUsuario}>
            <BsFillTrashFill />
          </Button>
          <Button
            variant="info"
            onClick={() => navigate(`/usuarios/${user}`)}
          >
            <BsFillPenFill />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableUsuarios;
