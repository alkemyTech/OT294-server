const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { authAdmin } = require('../middlewares/authAdmin.middleware')

// Controllers
const { createTestimonial } = require("../controllers/testimonials.controller");

testimonialsRouter.post("/", authAdmin, createTestimonial);

module.exports = testimonialsRouter
