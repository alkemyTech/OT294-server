// Model
const { members } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

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


module.exports = { deleteMember };