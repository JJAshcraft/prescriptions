const supertest = require("supertest");
const app = require("./app.js");

describe("GET root endpoint [/]", () => {
  it("should return status 200", async () => {
    const expected = 200;
    const result = await supertest(app)
      .get("/")
      .then(response => {
        expect(response.status).toBe(expected);
      });
  });

  it("should return in JSON format", async () => {
    const expected = "application/json";
    const result = await supertest(app)
      .get("/")
      .then(response => {
        expect(response.type).toBe(expected);
      });
  });

  it("should return the string ['Welcome to the Prescriptions API']", async () => {
    const expected = { message: "Welcome to the Prescriptions API" };
    const result = await supertest(app)
      .get("/")
      .then(response => {
        expect(response.body).toEqual(expected);
      });
  });
});

// beforeEach(() => {
//   moxios.install();
// });
// afterEach(() => {
//   moxios.uninstall();
// });
