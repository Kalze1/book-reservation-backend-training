const request = require("supertest");
const { app, server } = require("../app"); // Import the app and server

describe("Basic API Tests", () => {
  afterAll(async () => {
    server.close(); // Close the server after tests
  });

  it("should return 200 OK for the home route", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
