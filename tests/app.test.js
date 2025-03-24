const request = require("supertest");
const app = require("../app"); // Ensure this is the correct path to your app file

describe("Backend API Tests", () => {
  it("should return 200 OK for the home route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message"); // Ensure a message key exists in the response
  });
});
