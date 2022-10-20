let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3000";

const news = [
  {
    id: 1,
    name: "noticia 1",
    content: "contenido 1",
    image: "imagen",
    categoryId: 1,
  },
  {
    id: 2,
    name: "noticia 2",
    content: "contenido 2",
    image: "imagen",
    categoryId: 1,
  },
  {
    id: 3,
    name: "noticia 3",
    content: "contenido 3",
    image: "imagen",
    categoryId: 1,
  },
];

describe("Test endpoints News", () => {
  describe("POST /news", () => {
    it("Creacion de noticia exitosa", (done) => {
      chai
        .request(url)
        .post("/news")
        .end(function (err, res) {
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error en url creacion", (done) => {
      chai
        .request(url)
        .post("/new")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("GET /news", () => {
    it("Listado de noticias exitoso", (done) => {
      chai
        .request(url)
        .get("/news")
        .send({ news })
        .end(function (err, res) {
          console.log(res.body);
          expect(res).to.have.status(200);
          done();
        });
    });
    it("Listado de noticias por pagina", (done) => {
      chai
        .request(url)
        .get("/news?page=2")
        .send({ news })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    it("Error en url listado", (done) => {
      chai
        .request(url)
        .get("/new")
        .send({})
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("GET /news/:id", () => {
    it("Listado de noticia por id", (done) => {
      chai
        .request(url)
        .get("/news/1")
        .end(function (err, res) {
          expect(res.body.data).to.have.property("id").to.be.equal(1);
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error por noticia no encontrada", (done) => {
      chai
        .request(url)
        .get("/news/123")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("DELETE /news/:id", () => {
    it("Eliminacion de noticia por id", (done) => {
      chai
        .request(url)
        .get("/news/1")
        .end(function (err, res) {
          expect(res.body.data).to.have.property("id").to.be.equal(1);
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error por noticia no encontrada", (done) => {
      chai
        .request(url)
        .get("/news/123")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("UPDATE /news/:id", () => {
    it("Modificacion de noticia por id", (done) => {
      chai
        .request(url)
        .get("/news/1")
        .end(function (err, res) {
          expect(res.body.data).to.have.property("id").to.be.equal(1);
          expect(res).to.have.status(201);
          done();
        });
    });
    it("Error por noticia no encontrada", (done) => {
      chai
        .request(url)
        .get("/news/123")
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
