const express = require("express");
const newsRouter = express.Router();

// Controllers
const {
    createNews,
    getAllNews,
    getNewsDeleted,
    getNewsById,
    updateNews,
    deleteNews,
    getCommentsByNews
} = require("../controllers/news.controller");

// Middlewares
const { newsExists } = require("../middlewares/news.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");

newsRouter.post("/", createNews);
newsRouter.get("/", getAllNews);
newsRouter.get("/deleted", getNewsDeleted);
newsRouter.get("/:id", authAdmin, getNewsById);
newsRouter.put("/:id", newsExists, updateNews);
newsRouter.delete("/:id", newsExists, deleteNews);
newsRouter.get("/:id/comments", newsExists, getCommentsByNews);

module.exports =
    newsRouter;
