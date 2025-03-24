const request = require("supertest");

// Import the app without starting the actual server
const app = require("../app"); // Ensure this is the correct path

describe("Basic API Tests", () => {
  it("should return 200 OK for the home route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("should return JSON response", async () => {
    const res = await request(app).get("/");
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  it("should have a 'message' key in the response", async () => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty("message");
  });
});
