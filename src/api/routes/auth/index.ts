import express, { Router as ExpressRouter } from "express";

import * as authController from '../../controllers/auth';
import { celebrate } from "celebrate";
import { usersSchema } from "../../../middlewares/joiValidations";

const Router: ExpressRouter = express.Router();

Router.route("/register").post(
  celebrate(usersSchema.AuthUsersSchema),
  authController.register
);

Router.route("/login").post(
  celebrate(usersSchema.AuthUsersSchema),
  authController.login
);

export { Router };
