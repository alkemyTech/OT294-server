const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const getAuthenticatedUserInformation = async (req, res) => {
    const SECRET_KEY = process.env.JWT_SECRET
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token.split(' ')[1], SECRET_KEY);
    const userId = decodedToken.userId;
    return await User.findByPk(userId);
}

module.exports = {
    getAuthenticatedUserInformation
}