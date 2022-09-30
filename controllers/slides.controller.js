// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const updatedSlide = catchAsync(async (req, res) => {
  const { slide } = req;
  const { imageUrl, text, order, organizationId } = req.body;

  await slide.put(imageUrl, text, order, organizationId);

  res.status(201).json({
    status: true,
    message: "Detalle de slide",
    data: slide,
  });
});

module.exports = {
  updatedSlide,
};
