var express = require('express');
const { categoryExists } = require('../middlewares/categories.middleware');
const { Category } = require('../models/category');
const { updateCategory } = require('../controllers/categories.controller');

var router = express.Router();

//Models
const { Category } = require('../models/category')
//Middlewares
const { createCategoryValidators } = require('../middlewares/validators.middleware');
const { deleteCategory } = require('../controllers/categories.controller');

/* GET categories listing. */
router.get('/', function (req, res, next) {
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

/* PUT update a category */
router.put('/:id', categoryExists, async function (req, res) {
  const { id } = req.params;
  const { name, description, image } = req.body;
  const category = await updateCategory(id, { name, description, image });
  res.json({
    status: true,
    message: 'La categoría ha sido actulizada',
    data: category
  });
});

router.delete('/categories/:id', categoryExists, deleteCategory)


module.exports = router;
