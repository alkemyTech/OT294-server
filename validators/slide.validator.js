const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createSlideValidators = [
  body("imageUrl")
    .notEmpty()
    .withMessage("imageUrl no puede estar vacio")
    .isString()
    .withMessage("imageUrl debe ser texto"),
  body("text")
    .notEmpty()
    .withMessage("text no puede estar vacio")
    .isString()
    .withMessage("text debe ser texto"),
  body("order")
    .notEmpty()
    .withMessage("order no puede estar vacio")
    .isString()
    .withMessage("order debe ser texto"),
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
