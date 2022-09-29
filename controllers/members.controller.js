// Models
const { members } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getAllMembers = catchAsync(async (req, res) => {
    const membersAll = await members.findAll();

    res.status(201).json({
        status: true,
        message: "Miembros obtenidos exitosamente",
        data: membersAll
    });
});

module.exports = { getAllMembers };