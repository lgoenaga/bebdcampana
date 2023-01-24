import React from "react";

const TableContactos = (props) => {
  const { noReg, identification, firstName, firstSurname, dateBirth } =
    props.obj;

  return (
    <>
      <tr>
        <td>{noReg}</td>
        <td>{identification}</td>
        <td>{firstName}</td>
        <td>{firstSurname}</td>
        <td>{dateBirth}</td>
      </tr>
    </>
  );
};

export default TableContactos;
