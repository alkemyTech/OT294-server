// Models
const { Testimonials } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const testimonialsExists = catchAsync(async (req, next) => {
  const { id } = req.params;
  const testimonial = await Testimonials.findOne({ where: { id } });
  if (!testimonial) {
    return next(new AppError("Testimonio no encontrado", 404));
  }
  req.testimonial = testimonial;
  next();
});

module.exports = { testimonialsExists };