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
    const { page } = req.query
    const categories = await Category.findAll();
    
    if (!page) {
        page = 1
    }

    let nextPage = ''
    let previousPage = ''
    const lastPage = Math.ceil(categories.length / 10)
    const lastCategory = 10 * page
    const firstCategory = lastCategory - 10
    const categoriesPaginated = categories.slice(firstCategory, lastCategory)

    if (page > lastPage) {
        return next(new AppError("Página no encontrada"))
    }

    if (page === 1) {
        nextPage = `http://localhost:3000/categories?page=${page + 1}`
    } else if (page > 1 && page < lastPage) {
        previousPage = `http://localhost:3000/categories?page=${page - 1}`
        nextPage = `http://localhost:3000/categories?page=${page + 1}`
    } else if (page === lastPage) {
        previousPage = `http://localhost:3000/categories?page=${page - 1}`
    }


    res.status(201).json({
        status: true,
        message: "Las categorías se han obtenido",
        data: {
            categoriesPaginated,
            previousPage,
            nextPage
        }
    });
});

module.exports = {
    deleteCategory,
    updateCategory,
    createCategory,
    getCategoryById,
    getCategories
};