const { catchAsync } = require("../utils/catchAsync.util");
const { Category } = require("../models");

const updateCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;
    const { category } = req;
    const response = await category.update({ name, description, image }, { where: { id } });
    res.json({
        status: true,
        message: "La categoría ha sido actulizada",
        data: response
    });
});

const deleteCategory = catchAsync(async (req, res) => {
    const { category } = req;
    const fecha = new Date();
    await category.update({ deletedAt: fecha });
    res.status(204).json({
        status: true,
        message: "La categoría ha sido borrada"
    });
});

const createCategory = catchAsync(async (req, res) => {
    const { name, description, image } = req.body;
    const category = await Category.create({ name, description, image });
    res.status(204).json({
        status: true,
        message: "La categoría ha sido creada",
        data: category
    });
});

const getCategoryById = catchAsync(async (req, res) => {
    const { category } = req;
    res.status(201).json({
        status: true,
        message: "La categoría se ha obtenido",
        data: category
    });
});

const getCategories = catchAsync(async (req, res) => {
    const categories = await Category.findAll();

    res.status(200).json({
        status: true,
        message: "Las categorías se han obtenido",
        data: categories
    });
});

module.exports = {
    deleteCategory,
    updateCategory,
    createCategory,
    getCategoryById,
    getCategories
};