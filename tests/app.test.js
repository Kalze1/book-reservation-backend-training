const request = require("supertest");
const http = require("http");
const app = require("../app");

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, () => {
    console.log("Test server started on port 3001");
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log("Test server closed");
    done();
  });
});

describe("Backend API Tests", () => {
  it("should return 200 OK for the home route", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
  });
});
