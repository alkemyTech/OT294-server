const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createCategoryValidators = [
    body("name")
        .notEmpty()
        .withMessage("Nombre de la categoria no puede ser un campo vacio"),
    body("description")
        .notEmpty()
        .withMessage("Descripcion de la categoria no puede ser un campo vacio"),
    body("image")
        .notEmpty()
        .withMessage("Imagen no puede ser un campo vacio"),
    checkResult,
];

module.exports = { createCategoryValidators };