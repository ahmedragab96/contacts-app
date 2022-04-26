import express, { Router as ExpressRouter } from "express";
import { authMiddleware } from "../../../middlewares/auth";
import * as contactsController from "../../controllers/contacts";
import { celebrate } from "celebrate";
import { contactsSchema } from "../../../middlewares/joiValidations";

const Router: ExpressRouter = express.Router();

Router.route("/").post(
  authMiddleware,
  celebrate(contactsSchema.AddContactSchema),
  contactsController.addContact,
);

export { Router };
