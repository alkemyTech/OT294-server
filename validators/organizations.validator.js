const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createOrganizationValidators = [
    body("name")
        .notEmpty()
        .withMessage("Nombre no puede estar vacio")
        .isString()
        .withMessage("Nombre debe ser texto"),
    body("image")
        .notEmpty()
        .withMessage("Imagen no puede estar vacio")
        .isString()
        .withMessage("Imagen debe ser texto"),
    body("email")
        .notEmpty()
        .withMessage("Email no puede estar vacio")
        .isEmail()
        .withMessage("Formato email no valido"),
    body("welcomeText")
        .notEmpty()
        .withMessage("Texto de bienvenida no puede estar vacio"),
    checkResult,
];

module.exports = { createOrganizationValidators };