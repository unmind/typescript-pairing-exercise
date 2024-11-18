import request from "supertest";
import app from "./app";

describe("GET /", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello world");
  });
});
