import request from "supertest";
import express from "express";
import expressServer from "../../src/config/express";
import connectDB from "../../src/config/mongodb";
import { User } from "../../src/models";
import { IUser } from "../../src/models/user/types";

let app: express.Application;
let serverInstance;

const existingUser = {
  email: "ahmedr@gmail.com",
  password: "12345",
};

describe("/auth APIs", function () {
  beforeAll(async () => {
    connectDB();
    await expressServer.run();
    app = expressServer.expressApp;
    serverInstance = expressServer.expressServerInstance;
    jest.useFakeTimers();
    jest.setTimeout(100000);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    serverInstance.close();
  });

  it("responds with json and error 400 if user exists", function (done) {
    jest
      .spyOn(User, "findByEmail")
      .mockResolvedValueOnce(existingUser as IUser);
    request(app)
      .post("/v1/auth/register")
      .send(existingUser)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
