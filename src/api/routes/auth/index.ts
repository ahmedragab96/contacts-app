import express, { Router as ExpressRouter } from "express";

import * as authController from '../../controllers/auth';

const Router: ExpressRouter = express.Router();

Router.route("/register").post(
  authController.register
);

Router.route("/login").post(
  authController.login
);

export { Router };
