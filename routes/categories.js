const express = require('express');

// Controllers
const {
	deleteCategory,	
} = require('../controllers/categories.controller');

// Middlewares
const {
	categoryExists
} = require('../middlewares/categories.middleware.js');

const categoriesRouter = express.Router();

categoriesRouter.delete('/:id', categoryExists, deleteCategory);

module.exports = { categoriesRouter };
