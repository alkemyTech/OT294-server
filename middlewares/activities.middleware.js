// Models
const { Activities } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const activityExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const activity = await Activities.findOne({ where: { id } });

    if (!activity) {
        return next(new AppError("Actividad no encontrada", 404));
    }

    req.activity = activity;
    next();
});

module.exports = { activityExists };