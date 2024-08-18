require('dotenv').config();
const pino = require("pino");
const figlet = require("figlet");
const pjson = require('pjson');
const colors = require('colors')
const isProduction = process.env.ENV === "prod";
const runtimeMode = isProduction ? "Production" : "Development";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: { colorize: true, translateTime: "SYS:dd/mm/yyyy - HH:MM:ss" },
  },
});

async function launchLog(port, dbConnectionType) {
  await figlet("MIGTARX'S BLOG", function (err, data) {
    console.log(data);
  });
  console.log("Version: ".cyan + pjson.version)
  console.log("Server port: ".cyan + port.green)
  if (dbConnectionType !== "none"){
    console.log(`Database connection: `.cyan + (dbConnectionType === 'local'? dbConnectionType.green : dbConnectionType.magenta))
  }
  console.log("Runtime mode: ".cyan +  (isProduction ? runtimeMode.red : runtimeMode.gray))
}

module.exports = {logger, launchLog};
