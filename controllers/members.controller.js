// Models
const { members } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getAllMembers = catchAsync(async (req, res) => {
    const allMembers = await members.findAll();

    res.status(200).json({
        status: true,
        message: "Miembros obtenidos exitosamente",
        data: allMembers
    });
});

module.exports = { getAllMembers };
