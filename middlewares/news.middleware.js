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
