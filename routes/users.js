var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

// Middlewares
const {
  createUserValidators,
} = require('../middlewares/validators.middleware');

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

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  // Remove password from response
  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    newUser,
  });
});

module.exports = router;
