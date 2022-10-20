const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util")
const { Category } = require("../models");

const updateCategory = catchAsync(async (req, res) => {
    const { category } = req;
    const { name, description, image } = req.body;

    await category.update({ name, description, image });

    res.json({
        status: true,
        message: "La categoría ha sido actulizada",
        data: category
    });
});

const deleteCategory = catchAsync(async (req, res) => {
    const { category } = req;

    await category.destroy()
    res.status(204).json({
        status: true,
        message: "La categoría ha sido borrada"
    });
});

const createCategory = catchAsync(async (req, res) => {
    const { name, description, image } = req.body;
    const category = await Category.create({ name, description, image });
    res.status(201).json({
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
    let page = req.query.page || 0;
    const categories = await Category.findAndCountAll({ limit: 10, offset: +page * 10 });
    const totalPages = Math.ceil(categories.count / 10);

    res.status(200).json({
        status: true,
        message: "Categorias obtenidas con exito",
        data: {
            page: +page,
            content: categories.rows,
            totalPages,
            nextPage: `GET /comments/?page=${+page < totalPages ? +page + 1 : null}`,
            previusPage: `GET /comments/?page=${+page > 0 ? +page - 1 : null}`
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