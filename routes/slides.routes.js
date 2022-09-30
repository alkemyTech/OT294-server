const express = require("express");
const slidesRouter = express.Router();

// Controllers
const { deleteSlide } = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");

slidesRouter.get("/:id", authAdmin, slideExists, deleteSlide);

module.exports = slidesRouter;
