//Model
const { News } = require('../models/news')

// Utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const newsExists = catchAsync(async (req, res, next) => {
    const { id } = req.params.id;
    const news = await News.findOne({ where: { id }});
    if(!news) {
        return next(new AppError('News not found', 404))
    }
    req.news = news
    next()
})

module.exports = { newsExists}