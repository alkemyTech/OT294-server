const express = require("express");
const testimonialsRouter = express.Router();

// Controllers
const { createTestimonial } = require("../controllers/testimonials.controller");

// Middleware
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { createTestimonialValidators } = require("../validators/testimonials.validator");

testimonialsRouter.post("/", createTestimonialValidators, authAdmin, createTestimonial);

module.exports = testimonialsRouter;