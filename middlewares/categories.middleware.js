const db = require('../models');

const categoryExists = catchAsync(async (req, res, next) => {
    try {
        const { id } = req.params;

        const category = await db.Category.findOne({ where: { id } });
    
        if (!category) {
            res.status(404).send({ error: 'Category not found!' });
        }
    
        req.category = category;
        next();
        
    } catch (error) {
        res.send(error)
        console.log(error);
    }
	
});

module.exports = { categoryExists };