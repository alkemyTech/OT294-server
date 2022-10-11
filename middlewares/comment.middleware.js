// Models
const { Comment } = require("../models/category");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const commentExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const comment = await Comment.findOne({ where: { id } });

  if (!comment) {
    return next(new AppError("Comentario no encontrado", 404));
  }

  req.comment = comment;
  next();
});

module.exports = { commentExists };
