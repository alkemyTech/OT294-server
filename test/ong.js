let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3000";

const ongs = [
    {
        id: 1,
        name: "organization 1",
        image: "imagen",
        address: "direccion 1",
        phone: "1111111111",
        email: "organization1@test.com",
        welcomeText: "Esta es la bienvenida a mi organización",
        aboutUsText: "Somo una gran organización",
        facebook: "Url de facebook",
        linkedin: "Url de linkedin",
        instagram: "Url de instagram"
    }
];

describe("Test endpoints Ong", () => {
    describe("POST /organization/public", () => {
        it("Creacion de organizacion exitosa", (done) => {
            chai
                .request(url)
                .post("/organization/public")
                .send({
                    name: "organization 1",
                    image: "imagen",
                    address: "direccion 1",
                    phone: "1111111111",
                    email: "organization1@test.com",
                    welcomeText: "Esta es la bienvenida a mi organización",
                    aboutUsText: "Somo una gran organización",
                    facebook: "Url de facebook",
                    linkedin: "Url de linkedin",
                    instagram: "Url de instagram"
                })
                .end(function (err, res) {
                    expect(res).to.have.status(201);
                    done();
                });
        });
        it("Error en url creacion", (done) => {
            chai
                .request(url)
                .post("/organization/publi")
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe("GET /organization/public/:id", () => {
        it("Listado organizacion por id", (done) => {
            chai
                .request(url)
                .get("/organization/public/1")
                .end(function (err, res) {
                    expect(res.body.data).to.have.property("id").to.be.equal(1);
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it("Error por organizacion no encontrada", (done) => {
            chai
                .request(url)
                .get("/organization/public/123")
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe("UPDATE /organization/public/:id", () => {
        it("Modificacion de organizacion por id", (done) => {
            chai
                .request(url)
                .get("/organization/public/1")
                .end(function (err, res) {
                    expect(res.body.data).to.have.property("id").to.be.equal(1);
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it("Error por orgaanizacion no encontrada", (done) => {
            chai
                .request(url)
                .get("/organization/public/123")
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe("GET /organization/:id", () => {
        it("Listado de slides de la organizacion", (done) => {
            chai
                .request(url)
                .get("/organization/1")
                .end(function (err, res) {
                    expect(res.body.data).to.have.property("id").to.be.equal(1);
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it("Error por orgaanizacion no encontrada", (done) => {
            chai
                .request(url)
                .get("/organization/123")
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });
});