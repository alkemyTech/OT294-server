const express = require("express");
const slidesRouter = express.Router();

// Controllers
const { updateSlide } = require("../controllers/slides.controller");

// Utils
const upload = require("../controllers/uploadImage");

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { slideExists } = require("../middlewares/slide.middleware");

slidesRouter.put(
  "/:id",
  upload.single("imageUrl"),
  authAdmin,
  slideExists,
  updateSlide
);

module.exports = slidesRouter;
