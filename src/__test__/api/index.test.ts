import app from "../../app";
import request from "supertest";

describe("GET / - a simple api endpoint", () => {
   it("Index Request", async () => {
      const server: any = await request(app);
      const result: any = server.get("/");
      expect(result.text).toEqual("Welcome to Node-Typescript Starter");
      expect(result.statusCode).toEqual(200);
   });
});