const { Activities } = require("../models");
const { catchAsync } = require("../utils/catchAsync.util");


const getAllActivities = catchAsync(async (req, res) => {
    const activities = await Activities.findAll()

    res.status(200).json({
        status: true,
        message: "Litado de actividades",
        data: activities
    });
})

const updateActivity = catchAsync(async (req, res) => {
    const { activity } = req;
    const { name, content, image } = req.body;

    activity.update({ name, content, image });

    res.status(200).json({
        status: true,
        message: "Actividad modificada",
        data: activity
    });
});

const createActivity = catchAsync(async (req, res) => {
    const { name, content, image } = req.body;

    const activity = await Activities.create({ name, content, image });

    res.status(201).json({
        status: true,
        message: "Actividad creada",
        data: activity
    });
});

module.exports = {
    getAllActivities,
    updateActivity,
    createActivity
};