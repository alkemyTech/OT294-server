// Models
const { Comments } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");


const createComment = catchAsync(async (req, res) => {
    const { user_id, news_id, body } = req.body;
    const comment = await Comments.create({ news_id, user_id, body });

    res.status(201).json({
        status: "true",
        message: "Comentario creado con exito",
        data: comment,
    });
});

module.exports = {
    createComment
};