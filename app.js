import RouteHandler from "./routes/routeHandler";
var config = require("./config/appConfig.json");

const bodyParser = require("body-parser");

var express = require("express");
var app = express();
var port = config.port;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
var routeHandler = new RouteHandler();

// Access all requests
app.all("/sampleHandler", function (req, res, next) {
  routeHandler.sampleHandler(req.body);
  next(); // pass control to the next handler
  res.send("ok");
});

// GET method route
app.get("/test", function (req, res) {
  routeHandler.sampleHandler(req.body);
  res.send("Ok");
});

// POST method route
app.post("/test", function (req, res) {
  console.log(req.body);
  routeHandler.sampleHandler(req.body);
  res.send("Ok");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
