import express, { Router as ExpressRouter } from "express";
import { Router as authRoutes } from "./auth";
import { Router as contactsRoutes } from "../routes/contacts";

const Router: ExpressRouter = express.Router();

Router.use("/auth", authRoutes);
Router.use("/contacts", contactsRoutes);

export { Router };