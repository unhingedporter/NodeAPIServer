import { json } from "express";

var logger = require("../logger/logger.js").getLogger();

export default class RouteHandler {
  constructor() {}

  sampleHandler(data) {
    logger.info(JSON.stringify(data));
  }
}
