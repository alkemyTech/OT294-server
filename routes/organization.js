const { updateOrganization } = require('../controllers/organitazion.controller')
const authAdmin = require('../middlewares/authAdmin');
const { organizationDataValidators } = require('../middlewares/validators.middleware');


router.post('/public', authAdmin, organizationDataValidators, updateOrganization);