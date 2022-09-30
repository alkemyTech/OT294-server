const express = require("express");
const testimonialsRouter = express.Router();

// Middlewares
const { authAdmin } = require('../middlewares/authAdmin.middleware')

// Controllers
const { createTestimonial, deleteTestimonial } = "../controllers/testimonials.controller";

testimonialsRouter.post("/", authAdmin, createTestimonial);

testimonialsRouter.delete("/:id", testimonialsExists, authAdmin, deleteTestimonial)

module.exports = testimonialsRouter
