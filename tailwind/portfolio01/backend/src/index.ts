import express, { Express } from "express";
import {RetrieveData} from "./controllers/RetrieveData.js"
import config from "./db/config.js";

const app: Express = express();


RetrieveData()
app.listen(config.PORT, () => {
  console.log("port started at " + config.HOST_URL + config.PORT);
});
