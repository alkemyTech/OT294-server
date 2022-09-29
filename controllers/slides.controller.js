// Models
const { Slide } = require("../models");
const { uploadFile } = require("../services/imageService");
const upload = require("./uploadImage");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createSlide = catchAsync(async (req, res) => {
  const { order, text, organizationId } = req.body;
  const { file } = req;

  const imgRef = ref(upload, `slides/${Date.now()}_${file.originalname}`);
  const imgRes = await uploadFile(imgRef, file.buffer);

  const newSlide = await Slide.create({
    imageUrl: imgRes.metadata.fullPath,
    text,
    order,
    organizationId,
  });

  res.status(201).json({
    status: true,
    message: "Creacion de slide",
    data: newSlide,
  });
});

module.exports = {
  createSlide,
};
