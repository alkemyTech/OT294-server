// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const deleteSlide = catchAsync(async (req, res) => {
  const { slide } = req;

  await slide.destroy();

  res.status(201).json({
    status: true,
    message: "Slide eliminado",
    data: slide,
  });
});

module.exports = {
  deleteSlide,
};
