var log4js = require("log4js");
log4js.configure("./config/log4js.json");
var logger = log4js.getLogger("test-file-appender");

var getLogger = function () {
  return logger;
};

exports.getLogger = getLogger;
