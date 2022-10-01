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

const getOrganizationById = catchAsync(async (req, res) => {
    console.log("Entra");
    const organizationObj = {
        name: req.organization.name,
        image: req.organization.image,
        phone: req.organization.phone,
        address: req.organization.address
    };
    res.json({
        status: true,
        message: "La informacion de las organizaciones ha sido obtenida",
        data: organizationObj
    });
});

module.exports = {
    updateOrganization,
    getOrganizationById
};