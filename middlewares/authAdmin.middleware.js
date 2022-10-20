// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

//Model 
const { User } = require("../models")

const authAdmin = catchAsync(async (req, res, next) => {

    const { userId } = req
    const user = await User.findOne({ where: {id: userId}})

    if (user.roleId !== 1) {
        return next(new AppError("No tiene permisos de administrador", 403));
    }

    next();
});



module.exports = { authAdmin };
