const express = require("express");
const newsRouter = express.Router();

// Controllers
const {
    createNews,
    getAllNews,
    updateNews,
    deleteNews,
    getCommentsByNews
} = require("../controllers/news.controller");

// Middlewares
const { newsExists } = require("../middlewares/news.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { auth } = require("../middlewares/auth.middleware")

newsRouter.post("/", createNews);
newsRouter.get("/", getAllNews);
newsRouter.patch("/:id", newsExists, updateNews);
newsRouter.delete("/:id", newsExists, deleteNews);
newsRouter.get("/:id/comments", newsExists, getCommentsByNews);

module.exports =
    newsRouter;
