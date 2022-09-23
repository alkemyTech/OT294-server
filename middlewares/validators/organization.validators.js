const { body, validationResult } = require('express-validator');

const checkResult = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		
		const errorMsgs = errors.array().map(err => err.msg);

		const message = errorMsgs.join('. ');

		return next(new AppError(message, 400));
	}

	next();
};

const organizationValidators = [
	
	body('name')
		.notEmpty()
		.withMessage('Name cannot be empty'),

	body('image')
		.notEmpty()
		.withMessage('Image can not be empty'),

	body('phone')
		.notEmpty()
		.isNumeric()
		.withMessage('only numbers')
		.isLength({ min: 10 })
		.withMessage('phone number must be at least 10 characters long'),

	body('email')
		.notEmpty()
		.isEmail()
		.withMessage('Must provide a valid email'),		

	body('address')
		.notEmpty()
		.withMessage('Address can not be empty'),	

	body('welcomeText')
		.notEmpty()
		.withMessage('Welcome Text can not be empty'),	

	body('aboutUsText')
		.notEmpty()
		.withMessage('About Us Text can not be empty'),			

	checkResult,
];

module.exports = { organizationValidators };
