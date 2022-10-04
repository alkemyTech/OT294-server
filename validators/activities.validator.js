const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");


const updateActivityValidators = [
    body("id")
        .notEmpty()
        .withMessage("id no puede estar vacio")
        .isNumeric()
        .withMessage("id no es numerico")
        .custom((val) => val > 0)
        .withMessage("id no puede ser un valor negativo"),
    checkResult,
];
const createActivityValidators = [
    body("name")
        .notEmpty()
        .withMessage("el campo name no puede estar vacio"),
    body("content")
        .notEmpty()
        .withMessage("el campo content no puede estar vacio"),
    checkResult,
];


module.exports = {
    createActivityValidators,
    updateActivityValidators
};