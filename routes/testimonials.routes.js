const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { auth } = require("../middlewares/auth.middleware")
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
  auth,
  authAdmin,
  createTestimonial
);
testimonialsRouter.patch(
  "/:id",
  testimonialsExists,
  auth,
  authAdmin,
  updateTestimonial
);
testimonialsRouter.delete(
  "/:id",
  testimonialsExists,
  auth,
  authAdmin,
  deleteTestimonial
);

module.exports = testimonialsRouter;
