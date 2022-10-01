// Models
const { Organization } = require("../models");

// Utils
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const organizationExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const organization = await Organization.findOne({ where: { id } });

    if (!organization) {
        return next(new AppError("La organización con el id proporcionado no existe", 404));
    }

    req.organization = organization;
    next();
});

module.exports = { organizationExists };
