// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

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

  res.json({
    status: true,
    message: "El comentario ha sido actualizado",
    data: comment,
  });
});

module.exports = {
  updateComment,
};
