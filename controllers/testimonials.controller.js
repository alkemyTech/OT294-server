// Models
const { Testimonials } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createTestimonial = catchAsync(async (req, res, next) => {
    const { name, content } = req.body;
    const testimonial = await Testimonials.create({ name, content });

    res.status(201).json({
        status: "true",
        message: "Testimonio creado con exito",
        data: testimonial,
    });
});

const deleteTestimonial = catchAsync(async (req, res, next) => {
    const { testimonial } = req

    await testimonial.destroy()

    res.status(200).json({
        status: true,
        message: "Testimonio eliminado con exito"
    });
});

module.exports = { createTestimonial, deleteTestimonial };
