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
const { auth } = require("../middlewares/auth.middleware");

slidesRouter.post(
  "/",
  auth,
  authAdmin,
  upload.single("imageUrl"),
  createSlideValidators,
  createSlide
);

slidesRouter.get("/:id", slideExists, auth, authAdmin, getSlideById);

slidesRouter.get("/", auth, authAdmin, getAllSlides);

slidesRouter.patch(
  "/:id",
  auth,
  authAdmin,
  slideExists,
  upload.single("imageUrl"),
  updateSlide
);

slidesRouter.delete("/:id", auth, authAdmin, slideExists, deleteSlide);

module.exports = slidesRouter;
