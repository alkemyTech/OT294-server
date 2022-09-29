const { validationResult } = require("express-validator");
const { AppError } = require("./appError.util");

const checkResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Array has errors
        const errorMsgs = errors.array().map((err) => err.msg);

        const message = errorMsgs.join(". ");

        return next(new AppError(message, 400));
    }

    next();
};


module.exports = { checkResult };