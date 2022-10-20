const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models");
const { catchAsync } = require("../utils/catchAsync.util");

const auth = catchAsync(async(req, res, next) => {
        const SECRET_KEY = process.env.JWT_SECRET;
        const token = req.headers.authorization;
        
        if (!token) return res.status(403).json({ error: "No se ha proporcionado el token para acceder al recurso" });
        
        const decodedToken = jwt.verify(token.split(" ")[1], SECRET_KEY);

        const userId = decodedToken.id;
        
        const user = await User.findOne({where: {id: userId}});
        if (userId === user.id) {
            req.userId = userId;
            next();
        } else {
            res.status(403).json({ error: "El token no corresponde al usuario" });
        }
    
});

module.exports = { auth }