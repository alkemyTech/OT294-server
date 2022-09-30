const express = require("express");
const slidesRouter = express.Router();

// Controllers
const { getSlideById } = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");

slidesRouter.get("/:id", authAdmin, slideExists, getSlideById);

module.exports = slidesRouter;
