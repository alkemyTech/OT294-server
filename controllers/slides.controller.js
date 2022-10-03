// Utils
const { catchAsync } = require("../utils/catchAsync.util");
// Models
const { Slide } = require("../models/category");

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
  deleteSlide,
  updateSlide,
};
