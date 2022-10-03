// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getSlideById = catchAsync(async (req, res) => {
  const { slide } = req;

  res.status(200).json({
    status: true,
    message: "Detalle de slide",
    data: slide,
  });
});

module.exports = {
  getSlideById,
};
