const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { testimonialsExists } = require("../middlewares/testimonial.middleware");
const {
  createTestimonialValidators,
} = require("../validators/testimonials.validator");

// Controllers
const {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  getTestimonials,
} = require("../controllers/testimonials.controller");

testimonialsRouter.get("/", getTestimonials);

testimonialsRouter.post(
  "/",
  createTestimonialValidators,
  authAdmin,
  createTestimonial
);
testimonialsRouter.patch(
  "/:id",
  testimonialsExists,
  authAdmin,
  updateTestimonial
);
testimonialsRouter.delete(
  "/:id",
  testimonialsExists,
  authAdmin,
  deleteTestimonial
);

module.exports = testimonialsRouter;
