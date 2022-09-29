// Models
const { News } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const newsExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const news = await News.findOne({ where: { id } });
    if (!news) {
        return next(new AppError("Noticia no encontrada", 404));
    }
    req.news = news;
    next();
});

module.exports = { newsExists };
