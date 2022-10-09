const { body } = require("express-validator");
const { checkResult } = require("../utils/checkResult.util");

const createCommentValidators = [
    body("user_id")
        .notEmpty()
        .withMessage("User_id no puede ser un campo vacio")
        .isInt()
        .withMessage("El campo user_id debe ser numerico"),
    body("news_id")
        .notEmpty()
        .withMessage("News_id no puede ser un campo vacio")
        .isInt()
        .withMessage("El campo News_id debe ser numerico"),
    body("body")
        .notEmpty()
        .withMessage("Body no puede ser un campo vacio")
        .isString()
        .withMessage("El campo de de Body debe ser texto"),
    checkResult,
];

module.exports = { createCommentValidators };