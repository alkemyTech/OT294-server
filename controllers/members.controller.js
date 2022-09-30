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

const deleteMember = catchAsync(async (req, res) => {
    const { member } = req;

    await members.destroy({ where: { id: member.id } });
    const memberDeleted = await members.findOne({ where: { id: member.id }, paranoid: false });
    res.status(201).json({
        status: "true",
        message: "Miembro eliminado",
        data: { memberDeleted }
    });
});


module.exports = { getAllMembers, deleteMember };