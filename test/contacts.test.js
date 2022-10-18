const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");
require("dotenv").config();

// Para que chai use el chai-http
chai.use(chaiHttp);
const adminToken = process.env.JWT_SECRET;


describe("Testing contacts endpoints", () => {
    describe("#Get contacts: GET /contacts", () => {
        // Test get users
        it("it should return the list of contacts", (done) => {
            chai.request(app)
                .get("/contacts")
                .set({ Authorization: adminToken })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("data");
                    expect(res.body).to.have.property("message").equal("Lista de contactos");
                    expect(res.body.data).to.have.property("contacts"),
                done();
                });
        });
    });

    describe("#Get contacts: GET /contacts/backoffice/contacts", () => {
        // Test get users
        it("it should return the list of contacts backoffice", (done) => {
            chai.request(app)
                .get("/contacts/backoffice/contacts")
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property("data");
                    expect(res.body).to.have.property("message").equal("Contactos encontrados");
                    expect(res.body.data).to.have.property("contacts");
                done();
                });
        });
    });

    describe("#Create user, POST /contacts", () => {
        it("it should create a new contact", (done) => {
            const contact = {
                name: "Test contact name",
                email: "test@gmail.com",
                phone:4654564845,
                massage: "Test contact message"
            };
            chai.request(app)
                .post("/contacts")
                .send(contact)
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.a("object");
                    expect(res.body).to.have.property("message").equal("Contacto registrado exitosamente");
                    expect(res.body).to.have.property("data");
                    expect(res.body.data).to.have.property("contacts");
                done();
                });
        });

        it("it should not create a new contact without a name property", (done) => {
            chai.request(app)
                .post("/contacts")
                .send({
                    name: "",
                    email: "test@gmail.com",
                    phone: 4564567458,
                    massage: "Test contact message",
                })
                .end((error, res) => {
                    expect(error).to.be.null;
                    expect(res).to.have.status(400);
                    done();
                });
        });

        it("it should no post without email property", (done) => {
            chai.request(app)
                .post("/contacts")
                .send({
                    name: "Test contact name",
                    email: "",
                    phone: 4564567485,
                    massage: "Test contact message",
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

});