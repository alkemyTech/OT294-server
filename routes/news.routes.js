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
} = require("../controllers/news.controller");

// Middlewares
const { newsExists } = require("../middlewares/news.middleware");

newsRouter.post("/", createNews);
newsRouter.get("/", getAllNews);
newsRouter.get("/deleted", getNewsDeleted);
newsRouter.get("/:id", getNewsById);
newsRouter.put("/:id", newsExists, updateNews);
newsRouter.delete("/:id", newsExists, deleteNews);

module.exports =
    newsRouter;
