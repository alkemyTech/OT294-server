// Models
const { Slide } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const slideExists = catchAsync(async (req, next) => {
  const { id } = req.params;
  const slide = await Slide.findOne({ where: { id } });
  if (!slide) {
    return next(new AppError("Slide no encontrado", 404));
  }
  req.slide = slide;
  next();
});

module.exports = { slideExists };
