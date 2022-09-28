var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

// Middlewares
const {
  createUserValidators,
} = require('../middlewares/validators.middleware');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.example' });
const { User } = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* POST user registration. */
router.post('/auth/register', createUserValidators, async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  // Hash password
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);
  const SECRET_KEY = process.env.JWT_SECRET;
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  const token = jwt.sign(newUser.id, SECRET_KEY);
  // Remove password from response
  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    message: "Se ha registardo el usuario exitosamente",
    data: {
      newUser,
      token
    }
  });
});
/* POST users authentication. */
router.post('/auth/login', async (req, res, next) => {
  const { email, password } = req.body;

  // Validate credentials (email)
  const user = await User.findOne({
    where: { email, status: 'active' },
  });

  if (!user) {
    return next(new AppError('Credentials invalid', 400));
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return next(new AppError('Credentials invalid', 400));
  }

  // Generate JWT (JsonWebToken) ->
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Send response
  res.status(200).json({
    status: 'success',
    token,
  });
});

module.exports = router;
