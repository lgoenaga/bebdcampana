import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";
import { deleteCiudadano } from "../../routes/contactos";

const TableContactos = (props) => {
  const { noReg, identification, firstName, firstSurname, dateBirth } =
    props.obj;

  const navigate = useNavigate();

  const borrarContacto = async () => {
    let data = "";

    try {
      data = await deleteCiudadano(identification);

      console.log("Ciudadano Eliminado");
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log("Ciudadano no se ha podido eliminar", error);
    }
  };

  return (
    <>
      <tr>
        <td>{noReg}</td>
        <td>{identification}</td>
        <td>{firstName}</td>
        <td>{firstSurname}</td>
        <td>{dateBirth}</td>

        <td>
          <Button variant="danger" onClick={borrarContacto}>
            <BsFillTrashFill />
          </Button>
          <Button
            variant="info"
            onClick={() => navigate(`/contactos/${identification}`)}
          >
            <BsFillPenFill />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableContactos;
