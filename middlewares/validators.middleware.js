const { body, validationResult } = require('express-validator');
const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join('. ');

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidators = [
  body('firstName')
    .notEmpty()
    .withMessage('firstName cannot be empty')
    .isString()
    .withMessage('firstName is not a string'),
  body('lastName')
    .notEmpty()
    .withMessage('lastName cannot be empty')
    .isString()
    .withMessage('lastName is not a string'),
  body('email').isEmail().withMessage('Must provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isAlphanumeric()
    .withMessage('Password must contain letters and numbers'),
  checkResult,
];

const organizationDataValidators = [
  body('name')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isString()
    .withMessage('Name must be a string'),
  body('image')
    .notEmpty()
    .withMessage('Image cannot be empty')
    .isString()
    .withMessage('Image must be a string'),
  body('email')
    .notEmpty()
    .withMessage('Email que not be empty')
    .isEmail()
    .withMessage('Must provide a valid email'),
  body('welcomeText')
    .isEmpty()
    .withMessage('Welcome Text can not be empty'),         
  checkResult,
];

module.exports = {
  createUserValidators,
  organizationDataValidators
};
