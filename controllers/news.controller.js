// Models
const { News,Comment } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");


const createNews = catchAsync(async (req, res) => {
    const { name, content, image, categoryId } = req.body;
    const news = await News.create({ name, content, image, categoryId });

    res.status(201).json({
        status: true,
        message: "Noticia creada con exito",
        data: news,
    });
});


const getAllNews = catchAsync(async (req, res) => {
    let page = req.query.pag || 0;
    const news = await News.findAndCountAll({limit:2, offset: +page *2});
    const totalPages = Math.ceil(news.count / 2);

    res.status(200).json({
        status: true,
        message: "Novedades obtenidas con exito",
        data: {
            page: +page,
            content: news.rows,
            totalPages,
            nextPage: `GET /comments/?pag=${+page < totalPages ? +page+1 : null}`,
            previusPage: `GET /comments/?page=${+page > 0 ? +page-1 : null}`
        }
    });
});

const updateNews = catchAsync(async (req, res) => {
    const { news } = req;
    const { name, content, image, categoryId, deletedAt } = req.body;

    await news.update({ name, content, image, categoryId, deletedAt });

    res.status(200).json({
        status: true,
        message: "Noticia actualizada",
        data: news,
    });
});

const deleteNews = catchAsync(async (req, res) => {
    const { news } = req;
    const date = new Date();
    await news.update({ deletedAt: date });

    res.status(201).json({
        status: "true",
        message: "Noticia eliminada",
        data: news
    });
});



const getCommentsByNews = catchAsync(async (req, res, next) => {
    const { news } = req;
  
    const comments = await Comment.findAll({ where: { news_id: news.id } });
  
    if (!comments) {
      return next(new AppError("No hay comentarios en esta noticia", 404));
    }
  
    res.status(200).json({
      status: true,
      message: "Listado de comentarios",
      data: comments,
    });
  });



module.exports = {
    createNews,
    getAllNews,
    updateNews,
    deleteNews,
    getCommentsByNews
};