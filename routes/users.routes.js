const express = require("express");

//Controllers
const { getAllUsers, createUser, loginUser, updateUser, deleteUser } = require("../controllers/users.controller");

// Middlewares
const { createUserValidators } = require("../validators/users.validator");
const { auth } = require("../middlewares/auth.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { userExists } = require("../middlewares/users.middleware");

const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", auth, authAdmin, getAllUsers);

/* POST user registration. */
usersRouter.post("/auth/register", createUserValidators, createUser);

/* POST users authentication. */
usersRouter.post("/auth/login", loginUser);

/* PATCH  users updated */
usersRouter.patch("/:id", userExists, updateUser);

/* DELETE  user */
usersRouter.delete("/:id", userExists, deleteUser);

module.exports = usersRouter;
