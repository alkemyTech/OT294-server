// Models
const { Comments } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const commentExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const comment = await Comments.findOne({ where: { id } });
    if (!comment) {
        return next(new AppError("Comentario no encontrada", 404));
    }
    req.comment = comment;
    next();
});

module.exports = { commentExists };
