const express = require("express");
const slidesRouter = express.Router();

// Controllers
const { getAllSlides } = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");

slidesRouter.get("/", authAdmin,getAllSlides);

module.exports = slidesRouter;
