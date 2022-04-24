/* eslint-disable @typescript-eslint/no-empty-function */
import debug from 'debug';
import expressServer from './src/config/express';
import connectDB from './src/config/mongodb';

class WebServer {
  constructor() {
    debug("instantiating web server process");
  }

  async _load() {
    connectDB();
  }

  async run() {
    debug("Loading services");
    await this._load();
    await expressServer.run();
    debug("starting server");
    // Start accepting requests
    debug("server started successfully");
  }
}

const webServer = new WebServer();
export default webServer;