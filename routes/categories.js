var express = require('express');
var router = express.Router();
//Models
const { Category } = require('../models/category')
const { createCategoryValidators } = require('../middlewares/validators.middleware')

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/categories', createCategoryValidators, async (req, res, next) => {
  const { name } = req.body;

  const newCategory = await Category.create({ name })

  res.status(201).json({
    status: 'success',
    newCategory
  })
})

module.exports = router;
