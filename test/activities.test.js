const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");
const { beforeEach } = require("mocha");
require("dotenv").config();
chai.use(chaiHttp);
// Token para los tests.
const adminToken = process.env.JWT_SECRET;

describe("Testing activities endpoints",() => {
    let user = {
        firstName: "Usuario",
        lastName: "Demo",
        email: "test@test.com",
        password: "1234",
        roleId: 1,
    };
    let token = null;
    beforeEach(done => {
        chai.request(app)
            .post("/users/auth/login")
            .send(user)
            .end((err,res) => {
                token = res.body.data;
                done();
            });
    });

    describe("POST /activities",() => {
        it("it should create a new activity",(done) => {
            const activity = {
                name: "Actividad de prueba",
                image: "Link a imagen",
                content: "Contenido actividad de prueba",
                userId: 1
            };
            chai.request(app)
                .post("/activities")
                .set({ Authorization: `Bearer ${token}` })
                .send(activity)
                .end((error,res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("message").equal("Actividad creada");
                    expect(res.body).to.have.property("data");
                    expect(res.body.data[res.body.data.length - 1].name).to.be("Actividad de prueba");
                    done();
                });
        });

        it("it should not create an activity without it's name",(done) => {
            const activity = {
                image: "Link a imagen",
                content: "Contenido actividad de prueba",
                userId: 1
            };

            chai.request(app)
                .post("/activities")
                .set({ Authorization: `Bearer ${token}` })
                .send(activity)
                .end((error,res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(400);
                    done();
                });
        });
    });

    describe("GET /activities",() => {
        it("it should return the list of activities",(done) => {
            chai.request(app)
                .get("/activities")
                .set({ Authorization: `Bearer ${token}` })
                .end((error,res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("data");
                    expect(res.body).to.have.property("message").equal("Litado de actividades");
                    expect(res.body.data).to.be.a("array");
                    done();
                });
        });
    });

    describe("PUT /activities/:id",() => {
        it("it should update an activity",(done) => {
            const activityId = 1;
            const activity = {
                name: "Actividad de prueba cambiada",
                image: "Link a imagen",
                content: "Contenido actividad de prueba",
                userId: 1
            };
            chai.request(app)
                .put("/users/" + activityId)
                .send(activity)
                .end((error,res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("message").equal("Actividad modificada");
                    expect(res.body).to.have.property("data");
                    expect(res.body.data[0].name).to.be("Actividad de prueba cambiada");
                    done();
                });
        });
    });

});