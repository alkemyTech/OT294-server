const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");
require("dotenv").config();

// Para que chai use el chai-http
chai.use(chaiHttp);
// Token para los tests.
const adminToken = process.env.JWT_SECRET;

describe("Testing users endpoints", () => {
    describe("#Get users: GET /users", () => {
        // Test get users
        it("it should return the list of users", (done) => {
            chai.request(app)
                .get("/users")
                .set({ Authorization: adminToken })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("data");
                    expect(res.body).to.have.property("message").equal("Usuarios obtenidos exitosamente");
                    expect(res.body.data).to.be.a("array");
                    done();
                });
        });
    });

    describe("#Create user, POST /users", () => {
        it("it should create a new user", (done) => {
            const user = {
                firstName: "Test user firstName",
                lastName: "Test user lastName",
                email: "test@gmail.com",
                password: "12345678",
                image: "Test image",
                status: "active",
                roleId: 1
            };
            chai.request(app)
                .post("/users/auth/register")
                .send(user)
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("message").equal("Se ha registardo el usuario exitosamente");
                    expect(res.body).to.have.property("data");
                    expect(res.body.data).to.have.property("usuario");
                    expect(res.body.data).to.have.property("token");
                    done();
                });
        });

        it("it should not post a new user without a firstName property", (done) => {
            chai.request(app)
                .post("/users/auth/register")
                .send({
                    firstName: "",
                    lastName: "Test user lastName",
                    email: "test@gmail.com",
                    password: "12345678",
                    image: "Test image",
                    status: "Test active",
                    roleId: 1
                })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(400);
                    done();
                });
        });

        it("it should no post without email property", (done) => {
            chai.request(app)
                .post("/users/auth/register")
                .send({
                    firstName: "Test user firstName",
                    lastName: "Test user lastName",
                    email: "",
                    password: "12345678",
                    image: "Test image",
                    status: "Test active",
                    roleId: 1
                })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(400);
                    done();
                });
        });
    });

    describe("#Delete user, DELETE /users/:id", () => {
        it("it should delete an user", (done) => {
            const userId = 70;
            chai.request(app)
                .delete("/users/" + userId)
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("message").equal("Usuario eliminado");
                    expect(res.body).to.have.property("data");
                    done();
                });
        });

        it("it should delete an user with an userAdmin", (done) => {
            const userId = 71;
            chai.request(app)
                .delete("/users/" + userId)
                .set({ Authorization: adminToken })
                .end((error, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a("object");
                    done();
                });
        });

        it("it should throw an error when the user doesn't exists", (done) => {
            const userId = 120;
            chai.request(app)
                .delete("/users/" + userId)
                .end((error, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe("#Update user, PUT /users/:id", () => {
        it("it should update an user", (done) => {
            const userId = 31;
            chai.request(app)
                .put("/users/" + userId)
                .send({
                    firstName: "Test user firstName Update",
                    lastName: "Test user lastName",
                    email: "test@gmail.com",
                    image: "Test image",
                    password: "12345678",
                    status: "test activate"
                })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("message").equal("Usuario actualizado correctamente");
                    expect(res.body).to.have.property("data");
                    done();
                });
        });
    });
});