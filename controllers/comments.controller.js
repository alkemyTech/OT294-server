const { catchAsync } = require("../utils/catchAsync.util");
const { Comments } = require("../models");


const getAllComments = catchAsync(async (req, res) => {
    const comments = await Comments.findAll({attributes:["body"], order:["createdAt","DESC"]});
    res.status(200).json({ status: true, message: "Lista de comentarios", data: { comments } });
});

module.exports = {
    getAllComments
};
