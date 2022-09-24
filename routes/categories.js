var express = require('express');
const { categoryExists } = require('../middlewares/categories.middleware');
const { Category } = require('../models/category');

var router = express.Router();

/* GET categories listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET categories by id. */
router.get('/categories/:id', categoryExists, async (req, res, next) => {
  const { category } = req;

  const categoryById = await Category.findOne({
    where: { id: category.id },
  });

  res.status(201).json({
    status: 'sucess',
    categoryById,
  });
});

module.exports = router;
