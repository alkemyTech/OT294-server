// Models
const { Members } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const memberExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const member = await Members.findOne({ where: { id } });

    if (!member) {
        return next(new AppError("Miembro no encontrado", 404));
    }

    req.member = member;
    next();
});

module.exports = { memberExists };
