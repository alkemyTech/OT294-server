const express = require("express");
const testimonialsRouter = express.Router();

// Controllers
const { createTestimonial } = require("../controllers/testimonials.controller");

// Middleware
const { authAdmin } = require("../middlewares/authAdmin.middleware");

testimonialsRouter.post("/", authAdmin, createTestimonial);

module.exports = testimonialsRouter;