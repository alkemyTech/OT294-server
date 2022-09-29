// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const updateOrganization = catchAsync(async (req, res) => {
    const { organization } = req;
    const {
        name,
        image,
        address,
        phone,
        email,
        welcomeText,
        aboutUsText,
    } = req.body;

    const organizationUpdated = await organization.update({ name, image, address, phone, email, welcomeText, aboutUsText, });

    res.json({
        status: true,
        message: "La informacion de la organizacion ha sido actualizada",
        data: organizationUpdated
    });
});

module.exports = {
    updateOrganization
};