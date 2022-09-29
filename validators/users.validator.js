const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");
const createUserValidators = [
    body("firstName")
        .notEmpty()
        .withMessage("Nombre no puede estar vacio")
        .isString()
        .withMessage("Nombre debe ser texto"),
    body("lastName")
        .notEmpty()
        .withMessage("Apellido no puede estar vacio")
        .isString()
        .withMessage("Apellido debe ser texto"),
    body("email").isEmail().withMessage("Formato email no valido"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Longitud minima de contraseña 8 caracteres")
        .isAlphanumeric()
        .withMessage("Contraseña debe contener numeros y letras"),
    checkResult,
];

module.exports = { createUserValidators };