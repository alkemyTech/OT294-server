// Models
const { uploadFile } = require("../services/imageService");
const upload = require("./uploadImage");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const updatedSlide = catchAsync(async (req, res) => {
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

  res.status(201).json({
    status: true,
    message: "Slide actualizado",
    data: slide,
  });
});

module.exports = {
  updatedSlide,
};
