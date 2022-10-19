const express = require("express");
const slidesRouter = express.Router();

// Utils
const { upload } = require('../utils/upload.util');

// Controllers
const {
  createSlide,
  getSlideById,
  getAllSlides,
  updateSlide,
  deleteSlide,
} = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");
const { createSlideValidators } = require("../validators/slide.validator");

slidesRouter.post(
  "/",
  authAdmin,
  /* upload.single("imageUrl"), */
  createSlideValidators,
  createSlide
);

slidesRouter.get("/:id", authAdmin, slideExists, getSlideById);

slidesRouter.get("/", authAdmin, getAllSlides);

slidesRouter.patch(
  "/:id",
  /* upload.single("imageUrl"), */
  authAdmin,
  slideExists,
  updateSlide
);

slidesRouter.delete("/:id", authAdmin, slideExists, deleteSlide);

module.exports = slidesRouter;
