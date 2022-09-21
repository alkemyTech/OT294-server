const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()

/* GET token. */
router.get('/', function (req, res) {
    const { userId } = req.body;
    if (!userId) return res.status(401).json({ error: 'No se encuentra el id del ususario' });
    const SECRET_KEY = process.env.JWT_SECRET;
    const token = jwt.sign(userId, SECRET_KEY);
    res.status(200).json({ token });
});

module.exports = router;
