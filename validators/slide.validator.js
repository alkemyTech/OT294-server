const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createSlideValidators = [
  body("text")
    .notEmpty()
    .withMessage("text no puede estar vacio")
    .isString()
    .withMessage("text debe ser texto"),
  body("order")
    .notEmpty()
    .withMessage("order no puede estar vacio")
    .isNumeric()
    .withMessage("order no es numerico")
    .custom((val) => val > 0)
    .withMessage("order no puede ser un valor negativo"),
  body("organizationId")
    .notEmpty()
    .withMessage("organizationId no puede estar vacio")
    .isNumeric()
    .withMessage("organizationId no es numerico")
    .custom((val) => val > 0)
    .withMessage("organizationId no puede ser un valor negativo"),
  checkResult,
];

module.exports = { createSlideValidators };
