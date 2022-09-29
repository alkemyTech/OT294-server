const express = require("express");
const slidesRouter = express.Router();

// Controllers
const { createSlide } = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { createSlideValidators } = require("../validators/slide.validator");

slidesRouter.get(
  "/",
  authAdmin,
  upload.single("imageUrl"),
  createSlideValidators,
  createSlide
);

module.exports = slidesRouter;
