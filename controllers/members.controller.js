// Utils
const { catchAsync } = require("../utils/catchAsync.util");
// Models
const { Members } = require("../models");
require("dotenv").config();
const BASE_URL = process.env.BASE_URL;


const createMember = catchAsync(async (req, res) => {
    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body;
    const member = await Members.create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });

    res.status(201).json({
        status: true,
        message: "Miembro registrado exitosamente",
        data: member
    });
});

const getAllMembers = catchAsync(async (req, res) => {
    const { page } = req.query;
    const resultsPerPage = 10;

    const allMembers = await Members.findAll({ limit: resultsPerPage, offset: (page - 1) * resultsPerPage });

    let responseObj = { page };
    Number(page) > 1 && (responseObj.prevPage = BASE_URL + "members?page=" + (Number(page) - 1));
    allMembers.length === resultsPerPage && (responseObj.nextPage = BASE_URL + "members?page=" + (Number(page) + 1));
    responseObj.Members = allMembers;
    res.status(200).json({
        status: true,
        message: "Miembros obtenidos exitosamente",
        data: responseObj
    });
});

const updateMember = catchAsync(async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const result = await Members.update(body,{where:{id}});
    res.status(200).json({
        status: true, 
        message: "Miembro actualizado exitosamente",
        data: result
    });
});

const deleteMember = catchAsync(async (req, res) => {
    const { member } = req;

    await member.destroy();

    res.status(204).json({
        status: true,
        message: "Miembro eliminado"
    });
});

module.exports = { getAllMembers, createMember, updateMember, deleteMember };