"use strict";
const log4js = require("log4js");
log4js.configure({
    appenders: {
        out: { type: "stdout" },
    },
    categories: {
        default: { appenders: ["out"], level: "debug" },
    },
});
var logger = log4js.getLogger();
logger.debug("sfdsdfsdf", "f");
