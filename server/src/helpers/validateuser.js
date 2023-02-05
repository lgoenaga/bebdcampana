const { check } = require("express-validator");

const checkValidateUser = () => {
  return [
    check("user").notEmpty().withMessage("El usuario no puede estar vacio"),
    check("password")
      .notEmpty()
      .withMessage("El password no puede estar vacio"),
    check("rol").notEmpty().withMessage("El rol no puede estar vacio"),
    check("estado").notEmpty().withMessage("El estado no puede estar vacio"),
  ];
};

module.exports = {
  checkValidateUser,
};
