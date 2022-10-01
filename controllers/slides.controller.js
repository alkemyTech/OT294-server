// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const updateSlide = catchAsync(async (req, res) => {
  const { slide, file } = req;
  const { text, order, organizationId } = req.body;
  const imgRef = ref(upload, `slides/${Date.now()}_${file.originalname}`);
  const imgRes = await uploadFile(imgRef, file.buffer);
  await slide.update({
    imageUrl: imgRes.metadata.fullPath,
    text,
    order,
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
