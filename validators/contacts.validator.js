const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const checkContacts = [
  body("name")
    .notEmpty()
    .withMessage("Nombre del Contacto no puede ser un campo vacio"),
  body("email")
    .notEmpty()
    .withMessage("Email del Contacto no puede ser un campo vacio"),
  checkResult,
];

module.exports = {
  checkContacts,
};
