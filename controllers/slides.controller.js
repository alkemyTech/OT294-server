// Models
const { Slide } = require("../models");
const upload = require("./uploadImage");
const Image = require('../services/imageService')
const image = new Image()
// 
// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");
// Models

const createSlide = catchAsync(async (req, res) => {
  const { order, text, organizationId } = req.body;
  const { file } = req;
  const url = await image.uploadImage(order, file);
  return new Promise(async (resolve, reject) => {
    const slide = await Slide.create({
      imageUrl: url,
      text,
      order,
      organizationId: organizationId,
    });
    res.status(201).json({
      status: true,
      message: "Creacion de slide",
      data: slide,
    });
    resolve(slide);
  });
});

const updateSlide = catchAsync(async (req, res, next) => {
  const { slide, file } = req;
  const { text, order, organizationId } = req.body;

  if (order <= 0) {
    return next(new AppError("Digite un orden válido", 400));
  }

  if (file) {
    const url = await image.uploadImage(order, file);
    await slide.update({
      imageUrl: url,
      text,
      order: Number(order),
      organizationId,
    });
  } else {
    await slide.update({
      text,
      order: Number(order),
      organizationId,
    });
  }

  res.status(200).json({
    status: true,
    message: "Slide actualizado",
    data: slide,
  });
});

const getSlideById = catchAsync(async (req, res) => {
  const { slide } = req;

  res.status(200).json({
    status: true,
    message: "Detalle de slide",
    data: slide,
  });
});

const getAllSlides = catchAsync(async (req, res) => {
  let page = req.query.page || 0;
  const slides = await Slide.findAndCountAll({ limit: 10, offset: +page * 10 });
  const totalPages = Math.ceil(slides.count / 10);

  res.status(200).json({
    status: true,
    message: "Testimonios obtenidos con exito",
    data: {
      page: +page,
      content: slides.rows,
      totalPages,
      nextPage: `GET /slides/?page=${+page < totalPages ? +page + 1 : null}`,
      previusPage: `GET /slides/?page=${+page > 0 ? +page - 1 : null}`
    }
  });
});

const deleteSlide = catchAsync(async (req, res) => {
  const { slide } = req;

  await slide.destroy();

  res.status(204).json({
    status: true,
    message: "Slide eliminado"
  });
});

module.exports = {
  createSlide,
  getSlideById,
  getAllSlides,
  updateSlide,
  deleteSlide,
};
