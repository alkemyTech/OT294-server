const express = require("express");
const slidesRouter = express.Router();

// Controllers
const {
  deleteSlide,
  updateSlide,
} = require("../controllers/slides.controller");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");

slidesRouter.patch(
  "/:id",
  upload.single("imageUrl"),
  authAdmin,
  slideExists,
  updateSlide
);

slidesRouter.delete("/:id", authAdmin, slideExists, deleteSlide);

module.exports = slidesRouter;
