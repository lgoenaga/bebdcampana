import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import { deleteUsuario } from "../../routes/usuarios";
import { AuthHeaders } from "../../components/authheader";

const TableUsuarios = (props) => {
  const { noReg, user, rol, estado} = props.obj;

  const navigate = useNavigate();

  const borrarUsuario = async () => {
  

    try {
      const authheader = AuthHeaders();
      await deleteUsuario(user, authheader);
      console.log("Usuario Eliminado");
      window.location.reload();
    } catch (error) {
      console.log("Usuario no se ha podido eliminar", error);
    }
  };

  return (
    <>
      <tr className="fila-contactos">
        <td className="dato-contacto">{noReg}</td>
        <td className="dato-contacto">{user}</td>
        <td className="dato-contacto">{rol}</td>
        <td className="dato-contacto">{estado}</td>

        <td className="dato-contacto">
          <Button
            variant="danger"
            onClick={borrarUsuario}
            className="botones-mod"
          >
            <BsFillTrashFill />
          </Button>
          <Button
            className="botones-mod"
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
