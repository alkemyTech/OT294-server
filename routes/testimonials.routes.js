const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { authAdmin } = require('../middlewares/authAdmin.middleware')
const { createTestimonialValidators } = require("../validators/testimonials.validator");

// Controllers
const { createTestimonial, deleteTestimonial } = "../controllers/testimonials.controller";

testimonialsRouter.post("/",createTestimonialValidators, authAdmin, createTestimonial);

testimonialsRouter.delete("/:id", testimonialsExists, authAdmin, deleteTestimonial)

module.exports = testimonialsRouter
