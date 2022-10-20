const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

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
    createActivityValidators
};