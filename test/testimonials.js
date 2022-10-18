let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3000";

const testimonials = [
  {
    id: 1,
    name: "testimonials 1",
    content: "contenido 1",
  },
  {
    id: 2,
    name: "testimonials 2",
    content: "contenido 2",
  },
  {
    id: 3,
    name: "testimonials 3",
    content: "contenido 3",
  },
];

describe("Test endpoints Testimonials", () => {
  describe("POST /testimonials", () => {
    it("Creacion de testimonio exitoso", (done) => {
      chai
        .request(url)
        .post("/testimonials")
        .end(function (err, res) {
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error en url creacion", (done) => {
      chai
        .request(url)
        .post("/testimonials")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("GET /testimonials", () => {
    it("Listado de testimonios exitoso", (done) => {
      chai
        .request(url)
        .get("/testimonials")
        .send({ testimonials })
        .end(function (err, res) {
          console.log(res.body);
          expect(res).to.have.status(200);
          done();
        });
    });
    it("Listado de testimonios por pagina", (done) => {
      chai
        .request(url)
        .get("/testimonials?page=2")
        .send({ testimonials })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    it("Error en url listado", (done) => {
      chai
        .request(url)
        .get("/testimonials")
        .send({})
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("DELETE /testimonials/:id", () => {
    it("Eliminacion de testimonio por id", (done) => {
      chai
        .request(url)
        .get("/testimonials/1")
        .end(function (err, res) {
          expect(res.body.data).to.have.property("id").to.be.equal(1);
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error por testimonio no encontrado", (done) => {
      chai
        .request(url)
        .get("/testimonials/123")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("UPDATE /testimonials/:id", () => {
    it("Modificacion de testimonio por id", (done) => {
      chai
        .request(url)
        .get("/testimonials/1")
        .end(function (err, res) {
          expect(res.body.data).to.have.property("id").to.be.equal(1);
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error por testimonio no encontrada", (done) => {
      chai
        .request(url)
        .get("/testimonials/123")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
