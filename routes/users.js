var express = require('express');
var router = express.Router();
const db = require('../models')
const { Email } = require('../utils/email.util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
  
  const { firstName, lastName, email } = req.body;
  const { user } = req;

  const newUser = await db.User.create({
    firstName,
    lastName,
    email,
  });

  // Send mail when user has been created
  await new Email(user.email).sendWelcome(firstName);

  res.status(201).json({
    status: 'success',
    newUser,
});

});


module.exports = router;
