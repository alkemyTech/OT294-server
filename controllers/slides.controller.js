// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getSlideById = catchAsync(async (req, res) => {
  const { slide } = req;

  res.status(200).json({
    status: true,
    message: "Detalle del slide",
    data: slide,
  });
  
});

module.exports = {
  getSlideById,
};
