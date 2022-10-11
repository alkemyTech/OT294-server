// Models
const { Comment } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const getCommentsByPost = catchAsync(async (req, res, next) => {
  const { post } = req;

  const comments = await Comment.findAll({ where: { postId: post.id } });

  if (!comments) {
    return next(new AppError("No hay comentarios en este post", 404));
  }

  res.status(200).json({
    status: "true",
    message: "Listado de comentarios",
    data: comments,
  });
});

module.exports = {
  getCommentsByPost,
};
