var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.example' });
const { User } = require('../models/user');

//Middleware
const { authAdmin } = require('../middlewares/authAdmin')


/* GET users listing. */
router.get('/users', authAdmin, async (req, res, next) => {
  const users = await User.findAll()

  res.status(201).json({
    status: 'success',
    users
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
