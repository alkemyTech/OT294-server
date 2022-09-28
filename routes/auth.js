const express = require('express');
const router = express.Router();
const { getAuthenticatedUserInformation } = require('../controllers/auth.controller');

/* GET authenticated user information. */
router.get('/me', async (req, res) => {
    const user = await getAuthenticatedUserInformation(req);
    res.status(200).json({
        status: true,
        message: "Se ha obtenido la información del usuario autenticado",
        data: user
    });
});

module.exports = router;