const request = require("supertest");
const app = require("../app"); // Ensure this is correctly pointing to your app file
let server;

beforeAll(() => {
  server = app.listen(3000); // Start the server before tests
});

afterAll((done) => {
  server.close(done); // Ensure server closes properly
});

describe("Basic API Tests", () => {
  it("should return 200 OK for the home route", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
