const { check } = require("express-validator");

const checkValidateContacto = () => {
  return [
    check("useridentification")
      .notEmpty()
      .withMessage("La identificacion no puede estar vacio"),
    check("firstName")
      .notEmpty()
      .withMessage("El primer nombre no puede estar vacio"),
    check("firstSurname").notEmpty().withMessage("El primer apellido no puede estar vacio"),

  ];
};

module.exports = {
  checkValidateContacto,
};
