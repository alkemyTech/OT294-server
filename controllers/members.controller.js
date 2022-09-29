const { catchAsync } = require("../utils/catchAsync.util");
const { members } = require("../models");


const createMember = catchAsync(async (req, res) => {
    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body;
    const member = await members.create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });

    res.status(201).json({
        status: true,
        message: "Miembro registrado exitosamente",
        data: { member }
    });
});

module.exports = { createMember };