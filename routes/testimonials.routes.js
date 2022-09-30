const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { authAdmin } = require('../middlewares/authAdmin.middleware')
const { testimonialsExists } = require("../middlewares/testimonials.middleware");

// Controllers
const { createTestimonial, updateTestimonial } = require("../controllers/testimonials.controller");

testimonialsRouter.post("/", authAdmin, createTestimonial);
testimonialsRouter.patch("/:id", testimonialsExists, authAdmin, updateTestimonial)

module.exports = testimonialsRouter
