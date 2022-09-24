const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const SECRET_KEY = process.env.JWT_SECRET
        const token = req.headers.authorization;
        if (!token) return res.status(403).json({ error: 'No se ha proporcionado el token para acceder al recurso' });
        const decodedToken = jwt.verify(token.split(' ')[1], SECRET_KEY);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            res.status(403).json({ error: 'El token no corresponde al usuario' });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error });
    }
};