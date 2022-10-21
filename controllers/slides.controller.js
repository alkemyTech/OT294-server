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

const updateSlide = catchAsync(async (req, res) => {
  const { slide, file } = req;
  const { text, order, organizationId } = req.body;

  if (file) {
    const url = await image.uploadImage(order, file);
    await slide.update({
      imageUrl: url,
      text,
      order,
      organizationId,
    });
  } else {
    await slide.update({
      text,
      order,
      organizationId,
    });
  }

  /* let newOrder = 0;
  const slides = await Slide.findAll();

  const entryOrder = slides.some((slide) => slide.order === order);
  if (entryOrder) {
    return next(new AppError("Digite un orden diferente", 404));
  }

  if ((slides.length === 0 && order === 0) || order === undefined) {
    newOrder = 1;
  } else {
    if (order === 0 || order === undefined) {
      let maximumOrder = Math.max.apply(
        Math,
        slides.map(function (slide) {
          return slide.order;
        })
      );
      newOrder = maximumOrder + 1;
    }
  } */

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
  const slides = await Slide.findAll({
    attributes: ["imageUrl", "order"],
  });

  res.status(200).json({
    status: true,
    message: "Listado de slides",
    data: slides,
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
