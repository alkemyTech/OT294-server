// Models
const { Comments } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const deleteComment = catchAsync(async (req, res, next) => {

    const { comment, sessionUser } = req;

    if (sessionUser.id !== comment.userId || sessionUser.roleId !== 1) {
        return next(new AppError("No tienes permisos para eliminar este comentario", 404));
    }

    await Comments.destroy({ where: { id: comment.id } });
    const commentDeleted = await Comments.findOne({ where: { id: comment.id }, paranoid: false });
    res.status(200).json({
        status: "true",
        message: "Comentario eliminado",
        data: { commentDeleted }
    });
});

const updateComment = catchAsync(async (req, res) => {
  const { comment, sessionUser } = req;
  const { body } = req.body;

  if (sessionUser.id !== comment.userId || sessionUser.roleId !== 0) {
    return next(
      new AppError(
        "Usted no tiene permisos para actualizar este comentario",
        404
      )
    );
  }

  await comment.update({ body });

  res.status(200).json({
    status: true,
    message: "El comentario ha sido actualizado",
    data: comment,
  });
});

module.exports = {
  updateComment,
   deleteComment
};
