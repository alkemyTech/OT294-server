const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createMemberValidators = [
    body("name")
        .notEmpty()
        .withMessage("Nombre de la categoria no puede ser un campo vacio")
        .isString()
        .withMessage("El nombre debe ser de tipo string"),
    checkResult,
];

module.exports = { createMemberValidators };