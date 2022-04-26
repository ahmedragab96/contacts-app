import mongoose from "mongoose";
import { config } from "../config/env";

function connectDB() {
  mongoose
    .connect(config.databaseURL)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err));
}

export default connectDB;
