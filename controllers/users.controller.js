const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Models
const { User } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");
const { Email } = require("../utils/email.util");

dotenv.config({ path: "./.env.example" });

const getAllUsers = catchAsync(async (req, res) => {
    const users = await User.findAll();

    res.status(201).json({
        status: true,
        message: "Usuarios obtenidos exitosamente",
        data: users
    });
});

const createUser = catchAsync(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    const SECRET_KEY = process.env.JWT_SECRET;
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
    });
    const token = jwt.sign(newUser.id, SECRET_KEY);
    // Remove password from response
    newUser.password = undefined;

    // Send welcome email
    await new Email(email).sendWelcome(firstName);

    res.status(201).json({
        status: true,
        message: "Se ha registardo el usuario exitosamente",
        data: {
            ususario: newUser,
            token
        }
    });
});

const loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Validate credentials (email)
    const user = await User.findOne({
        where: { email, status: "active" },
    });

    if (!user) {
        return next(new AppError("Credentials invalid", 400));
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return next(new AppError("Credentials invalid", 400));
    }

    // Generate JWT (JsonWebToken) ->
    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    // Send response
    res.status(200).json({
        status: true,
        data: token,
        message: "Sesión iniciada correctamente"
    });
});

const updateUser = catchAsync(async (req, res) => {
    const { user } = req;
    const { firstName, lastName, email, image, password } = req.body;

    await user.update({ firstName, lastName, email, image, password });

    res.status(201).json({
        status: true,
        message: "Usuario actualizado correctamente",
        data: user
    });
});

const deleteUser = catchAsync(async (req, res) => {
    const { user } = req;
    await user.destroy();

    res.status(200).json({
        status: true,
        message: "Usuario borrado correctamente",
        data: user
    });
});

module.exports = { getAllUsers, createUser, loginUser, updateUser,deleteUser };