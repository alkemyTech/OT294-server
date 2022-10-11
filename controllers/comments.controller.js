const { catchAsync } = require("../utils/catchAsync.util");
const { Comment } = require("../models");


const getAllComments = catchAsync(async (req, res) => {
    const comments = await Comment.findAll({attributes:["body"], order:[["createdAt","DESC"]]});
    res.status(200).json({ status: true, message: "Lista de comentarios", data: { comments } });
});

module.exports = {
    getAllComments
};
