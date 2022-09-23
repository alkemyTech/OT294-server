const express = require('express');

// Controllers
const {
	updateDataOrganization,     
} = require('../controllers/organization.controller');

// Middlewares
const {authAdmin} = require('../middlewares/authAdmin');
const {organizationValidators} = require('../middlewares/validators/organization.validators')
const organizationRouter = express.Router();

organizationRouter.use(authAdmin)

organizationRouter.post('/public', organizationValidators, updateDataOrganization);






module.exports = organizationRouter;