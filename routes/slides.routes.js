const express = require("express");
const slidesRouter = express.Router();

// Controllers
const {
  createSlide,
  deleteSlide,
} = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");
const { createSlideValidators } = require("../validators/slide.validator");

slidesRouter.post(
  "/",
  authAdmin,
  upload.single("imageUrl"),
  createSlideValidators,
  createSlide
);

slidesRouter.delete("/:id", authAdmin, slideExists, deleteSlide);

module.exports = slidesRouter;
