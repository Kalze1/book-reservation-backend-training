const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app"); // Import app directly

describe("Basic API Tests", () => {
  let server;

  // Start a server before tests
  beforeAll((done) => {
    server = app.listen(4000, () => done());
  });

  afterAll(async () => {
    await mongoose.connection.close(); // Close MongoDB connection
    server.close(); // Close the server after tests
  });

  it("should return 200 OK for the home route", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("should return JSON response", async () => {
    const res = await request(server).get("/");
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  it("should have a 'message' key in the response", async () => {
    const res = await request(server).get("/");
    expect(res.body).toHaveProperty("message");
  });
});
