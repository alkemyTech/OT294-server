const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models");

const getAuthenticatedUserInformation = async (req, res) => {
    const SECRET_KEY = process.env.JWT_SECRET;
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token.split(" ")[1], SECRET_KEY);
    const userId = decodedToken.userId;
    const user = await User.findByPk(userId);
    res.status(200).json({
        status: true,
        message: "Se ha obtenido la información del usuario autenticado",
        data: user
    });
};

module.exports = {
    getAuthenticatedUserInformation
};