require("dotenv").config();
const chai = require("chai");
const { expect } = require("chai");
const app = require("../app");
const chaiHttp = require("chai-http");

//Assertion Style
chai.should();
chai.use(chaiHttp);
// Token para los tests.
const adminToken = process.env.TEST_ADMIN_TOKEN;

describe("Members API", () => {
  //Test the GET route
  describe("GET /members", () => {
    describe("#Get members: GET /members", () => {
      it("it should return the list of members", (done) => {
        chai
          .request(app)
          .get("/members?page=1")
          .set({ Authorization: adminToken })
          .end((error, res) => {
            expect(error).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("data");
            expect(res.body)
              .to.have.property("message")
              .equal("Miembros obtenidos exitosamente");
            expect(res.body.data).to.have.property("page"), done();
          });
      });
    });
  });
  describe("GET /members", () => {
    it("Should return and errror for not auth, without using token", (done) => {
      chai
        .request(app)
        .get("/members?page=1")
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body)
            .to.have.property("error")
            .equal("No se ha proporcionado el token para acceder al recurso");
          done();
        });
    });
  });

  // Test the POST route
  describe("#Create members, POST /members", () => {
    it("it should create members", (done) => {
      const members = {
        id: "30",
        name: "ivan martinez",
        facebookUrl: "https://www.facebook.com/",
        instagramUrl: "https://www.instagram.com/",
        linkedinUrl: "https://www.linkedin.com/",
        image: "https://www.google.com/",
        description: "Test description",
      };
      chai
        .request(app)
        .post("/members")
        .send(members)
        .end((error, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body)
            .to.have.property("message")
            .equal("Miembro registrado exitosamente");
          done();
        });
    });
  });

  //   //Test the PUT route
  describe("PUT /members/:id", () => {
    it("it should UPDATE  members", (done) => {
      let members = {
        name: "Test Joe",
        facebookUrl: "https://www.facebook.com/",
        instagramUrl: "https://www.instagram.com/",
        linkedinUrl: "https://www.linkedin.com/",
        image: "https://www.google.com/",
        description: "Test description",
      };
      chai
        .request(app)
        .patch("/members/39")
        .send(members)
        .end((error, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body)
            .to.have.property("message")
            .equal("Miembro actualizado exitosamente");
          done();
        });
    });
  });
  describe("PUT /members/:id", () => {
    it("it should id members exits", (done) => {
      let members = {
        name: "Test Joe",
        facebookUrl: "https://www.facebook.com/",
        instagramUrl: "https://www.instagram.com/",
        linkedinUrl: "https://www.linkedin.com/",
        image: "https://www.google.com/",
        description: "Test description",
      };
      chai
        .request(app)
        .patch("/members/5423")
        .send(members)
        .end((error, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  //   //Test the DELETE route
  describe("DELETE /members/:id", () => {
    it("it should DELETE a members given the id", (done) => {
      chai.request(app)
        .delete("/members/48")
        .end((error, res) => {
         expect(res.body).to.be.a("object");
         expect(res.body).to.have.property("message").equal("Miembro eliminado");
         expect(res).to.have.status(200);
          done();
        });
    });
  });
});
