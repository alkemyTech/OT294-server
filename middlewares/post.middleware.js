// Models
const { Post } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const postExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id } });
  if (!post) {
    return next(new AppError("Post no encontrado", 404));
  }
  req.post = post;
  next();
});

module.exports = { postExists };
