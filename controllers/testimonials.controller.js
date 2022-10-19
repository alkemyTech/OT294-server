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

  res.status(200).json({
    status: true,
    message: "Testimonio eliminado con exito",
  });
});

const getTestimonials = catchAsync(async (req, res) => {
  const { page } = req.query;
  const testimonials = await Testimonials.findAll();

  if (!page) {
    page = 1;
  }

  let nextPage = "";
  let previousPage = "";
  const lastPage = Math.ceil(testimonials.length / 10);
  const lastTestimonials = 10 * page;
  const firstTestimonials = lastTestimonials - 10;
  const testimonialsPaginated = testimonials.slice(
    firstTestimonials,
    lastTestimonials
  );

  if (page > lastPage) {
    return next(new AppError("Página no encontrada"));
  }

  if (page === 1) {
    nextPage = `http://localhost:3000/testimonials?page=${page + 1}`;
  } else if (page > 1 && page < lastPage) {
    previousPage = `http://localhost:3000/testimonials?page=${page - 1}`;
    nextPage = `http://localhost:3000/testimonials?page=${page + 1}`;
  } else if (page === lastPage) {
    previousPage = `http://localhost:3000/testimonials?page=${page - 1}`;
  }

  res.status(200).json({
    status: true,
    message: "Los testimonios se han obtenido",
    data: {
      testimonialsPaginated,
      previousPage,
      nextPage,
    },
  });
});

module.exports = {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonials,
};
