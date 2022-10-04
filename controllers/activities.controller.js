const { Activities } = require("../models");
const { catchAsync } = require("../utils/catchAsync.util");


const updateActivity = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Activities.update(body, { where: { id } });
    res.json({
        status: "true",
        message: "Actividad modificada",
        data
    });
});
const createActivity = catchAsync(async (req, res) => {
    const { name, content, image } = req.body;

    const activity = await Activities.create({ name, content, image });
    res.json({
        status: true,
        message: "Actividad creada",
        data: activity
    });
});

module.exports = {
    updateActivity,
    createActivity
};