// Models
const { Testimonials } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createTestimonial = catchAsync(async (req, res, next) => {
    const { name, content } = req.body;
    const testimonial = await Testimonials.create({ name, content });

    res.status(201).json({
        status: true,
        message: "Testimonio creado con exito",
        data: testimonial,
    });

});

const updateTestimonial = catchAsync(async (req, res, next) => {
    const { testimonial } = req
    const { name, content } = req.body;
    
    await Testimonials.update({ name, content });

    res.status(200).json({
        status: true,
        message: "Testimonio actualizado con exito",
        data: testimonial,
    });

});
module.exports = { createTestimonial, updateTestimonial };