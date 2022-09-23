const db = require('../models')

const updateDataOrganization = async (req, res, next) => {
        try {
                const { name,
                        image,
                        address,
                        phone,
                        email,
                        welcomeText,
                        aboutUsText } = req.body;

                await db.Organization.update({
                        name,
                        image,
                        address,
                        phone,
                        email,
                        welcomeText,
                        aboutUsText
                });

                res.status(204).json({ status: 'success' });


        } catch (error) {
                console.log(error);
        }

        module.exports = {
                updateDataOrganization
        }
}