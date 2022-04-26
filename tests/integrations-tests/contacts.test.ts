import request from "supertest";
import express from "express";
import expressServer from "../../src/config/express";
import connectDB from "../../src/config/mongodb";
import { User } from "../../src/models";
import { IUser } from "../../src/models/user/types";

let app: express.Application;
let serverInstance;

describe("/contacts APIs", function () {
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

  it("responds with json and 401 error as auth token was not provided", function (done) {
    request(app)
      .post("/v1/contacts")
      .send({ firetName: 'evervre'})
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(401)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
