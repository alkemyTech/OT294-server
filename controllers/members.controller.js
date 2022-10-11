// Utils
const { catchAsync } = require("../utils/catchAsync.util");
// Models
const { members } = require("../models");
require("dotenv").config();
const BASE_URL = process.env.BASE_URL;


const createMember = catchAsync(async (req, res) => {
    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body;
    const member = await members.create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });

    res.status(201).json({
        status: true,
        message: "Miembro registrado exitosamente",
        data: { member }
    });
});

const getAllMembers = catchAsync(async (req, res) => {
    const { page } = req.query;
    const resultsPerPage = 10;
    const allMembers = await members.findAll({ limit: resultsPerPage, offset: (page - 1) * resultsPerPage });
    let responseObj = { page };
    Number(page) > 1 && (responseObj.prevPage = BASE_URL + "members?page=" + (Number(page) - 1));
    console.log(allMembers.length);
    allMembers.length === resultsPerPage && (responseObj.nextPage = BASE_URL + "members?page=" + (Number(page) + 1));
    responseObj.members = allMembers;
    res.status(200).json({
        status: true,
        message: "Miembros obtenidos exitosamente",
        data: responseObj
    });
});

const deleteMember = catchAsync(async (req, res) => {
    const { member } = req;

    await members.destroy({ where: { id: member.id } });
    const memberDeleted = await members.findOne({ where: { id: member.id }, paranoid: false });
    res.status(200).json({
        status: "true",
        message: "Miembro eliminado",
        data: { memberDeleted }
    });
});

module.exports = { getAllMembers, createMember };