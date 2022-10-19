// Models
const { Category } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const categoryExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const category = await Category.findOne({ where: { id } });

    if (!category) {
        return next(new AppError("Categoria no encontrada", 404));
    }

    req.category = category;
    next();
});

module.exports = { categoryExists };
