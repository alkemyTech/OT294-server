// Models
const { Slide } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getAllSlides = catchAsync(async (req, res) => {
    const slides = await Slide.findAll({
        attributes: ["imageUrl", "order"],
    });

    res.status(201).json({
        status: true,
        message: "Listado de slides",
        data: slides,
    });
});

module.exports = {
    getAllSlides,
};
