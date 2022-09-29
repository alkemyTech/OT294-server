const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");


const createActivityValidators = [
    body("id")
        .notEmpty()
        .withMessage("id no puede estar vacio")
        .isNumeric()
        .withMessage("id no es numerico")
        .custom((val) => val > 0)
        .withMessage("id no puede ser un valor negativo"),
    checkResult,
];


module.exports = {
    createActivityValidators
};