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
const db = require('../models');

const newExists = async (req, res, next) => {
	try {
        const { id } = req.params;

        const newFounded = await db.New.findOne({ where: { id } });
    
        if (!newFounded) {
            res.send('Error, new not found');
        }
    
        req.newFounded = newFounded;
        next();    
    } catch (error) {
        res.send(error)
        console.log(error);
    }
    
};

module.exports = { newExists };
