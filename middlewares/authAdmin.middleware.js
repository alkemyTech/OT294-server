// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const authAdmin = catchAsync(async (req, res, next) => {
    const { roleId } = req.body;

    if (roleId !== 1) {
        return next(new AppError("No tiene permisos de administrador", 403));
    }

    next();
});



module.exports = { authAdmin };
