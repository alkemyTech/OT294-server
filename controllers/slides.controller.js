// Models
const { Slide } = require("../models");
// const { uploadFile, getFileUrl } = require("../services/imageService");
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
    //  const slideId =  Slide.findOne({where: { order }})
    const result = await image.uploadImage(file)
    res.json(result)
  // let newOrder = 0;
  // const slides = await Slide.findAll();

  // const entryOrder = slides.some((slide) => slide.order === order);
  // if (entryOrder) {
  //   return next(new AppError("Digite un orden diferente", 404));
  // }

  // if ((slides.length === 0 && order === 0) || order === undefined) {
  //   newOrder = 1;
  // } else {
  //   if (order === 0 || order === undefined) {
  //     let maximumOrder = Math.max.apply(
  //       Math,
  //       slides.map(function (slide) {
  //         return slide.order;
  //       })
  //     );
  //     newOrder = maximumOrder + 1;
  //   }
  // }

  // const newSlide = await Slide.create({
  //   imageUrl: result,
  //   text,
  //   order: newOrder,
  //   organizationId,
  // });

  // res.status(201).json({
  //   status: true,
  //   message: "Creacion de slide",
  //   data: newSlide,
  // });
});

const updateSlide = catchAsync(async (req, res) => {
  const { slide, file } = req;
  const { text, order, organizationId } = req.body;
  const imgRef = ref(upload, `slides/${Date.now()}_${file.originalname}`);
  const imgRes = await uploadFile(imgRef, file.buffer);

  let newOrder = 0;
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
  }

  await slide.update({
    imageUrl: imgRes.metadata.fullPath,
    text,
    order: newOrder,
    organizationId,
  });

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

  res.status(200).json({
    status: true,
    message: "Slide eliminado",
    data: slide,
  });
});

module.exports = {
  createSlide,
  getSlideById,
  getAllSlides,
  updateSlide,
  deleteSlide,
};
