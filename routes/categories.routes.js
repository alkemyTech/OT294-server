const express = require("express");
const { categoryExists } = require("../middlewares/categories.middleware");
const { createCategoryValidators } = require("../validators/categories.validator");
const { updateCategory, deleteCategory, createCategory, getCategoryById, getCategories } = require("../controllers/categories.controller");
const router = express.Router();

router.get("/", getCategories);
router.get("/:id", categoryExists, getCategoryById);
router.post("/", createCategoryValidators, createCategory);
router.put("/:id", categoryExists, updateCategory);
router.delete("/:id", categoryExists, deleteCategory);


module.exports = router;
