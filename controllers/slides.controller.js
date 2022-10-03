// Models
const { Slide } = require("../models");
const { uploadFile } = require("../services/imageService");
const upload = require("./uploadImage");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const createSlide = catchAsync(async (req, res) => {
  const { order, text, organizationId } = req.body;
  const { file } = req;

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

  const newSlide = await Slide.create({
    imageUrl: imgRes.metadata.fullPath,
    text,
    order: newOrder,
    organizationId,
  });

  res.status(201).json({
    status: true,
    message: "Creacion de slide",
    data: newSlide,
  });
});

const getSlideById = catchAsync(async (req, res) => {
  const { slide } = req;

  await slide.destroy();

  res.status(200).json({
    status: true,
    message: "Detalle de slide",
    data: slide,
  });
});

module.exports = {
  getSlideById,
  createSlide,
  deleteSlide,
};
