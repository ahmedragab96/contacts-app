import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { Router as api } from "../api/routes";
import cors from "cors";
import { expressLogger } from "../middlewares/logs";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import debug from "debug";

class ExpressServer {
  constructor() {
    debug("instantiating express server process");
  }

  async _load() {
    const app = express();
    const port = 5000;

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(expressLogger);

    app.use("/v1", api);

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    //The 404 Route
    app.get("*", function (req, res) {
      res.status(404).send("Not Found");
    });

    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    });
  }

  async run() {
    debug("Loading express service");
    await this._load();
    debug("express server started successfully");
  }
}


const expressServer = new ExpressServer();
export default expressServer;