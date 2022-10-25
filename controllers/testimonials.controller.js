// Models
const { Testimonials } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

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
  const { testimonial } = req;
  const { name, content } = req.body;

  await testimonial.update({ name, content });

  res.status(200).json({
    status: true,
    message: "Testimonio actualizado con exito",
    data: testimonial,
  });
});

const deleteTestimonial = catchAsync(async (req, res, next) => {
  const { testimonial } = req;

  await testimonial.destroy();

  res.status(204).json({
    status: true,
    message: "Testimonio eliminado con exito",
  });
});

const getTestimonials = catchAsync(async (req, res) => {
  let page = req.query.page || 0;
    const testimonials = await Testimonials.findAndCountAll({ limit: 10, offset: +page * 10 });
    const totalPages = Math.ceil(testimonials.count / 10);

    res.status(200).json({
        status: true,
        message: "Testimonios obtenidos con exito",
        data: {
            page: +page,
            content: testimonials.rows,
            totalPages,
            nextPage: `GET /testimonials/?page=${+page < totalPages ? +page + 1 : null}`,
            previusPage: `GET /testimonials/?page=${+page > 0 ? +page - 1 : null}`
        }
    });
});

module.exports = {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonials,
};
