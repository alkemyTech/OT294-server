const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createTestimonialValidators = [
    body("name")
        .notEmpty()
        .withMessage("Nombre no puede estar vacio")
        .isString()
        .withMessage("Nombre debe ser texto"),
    body("content")
        .notEmpty()
        .withMessage("Contenido no puede estar vacio")
        .isString()
        .withMessage("Contenido debe ser texto"),
    checkResult,
];

module.exports = { createTestimonialValidators };