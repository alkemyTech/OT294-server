const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createMemberValidators = [
    body("name")
        .notEmpty()
        .withMessage("El Nombre de miembro no puede estar vacio")
        .isString()
        .withMessage("El campo Nombre debe ser texto"),
    checkResult,
];

module.exports = { createMemberValidators };
