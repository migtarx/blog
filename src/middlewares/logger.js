const { logger } = require('../utils/logger');
const { v4: uuidv4 } = require('uuid');
const Falconflare = require('@mpuertadev/falconflare-client');
const statusServerIp = process.env.STATUS_SERVER_IP
const ffclient = new Falconflare({serverUrl: process.env.FF_URL, accessKey: process.env.FF_PASSWD})
const { isStatic } = require('../utils/utils')

const logRequest = async (req, res, next) => {
  const { method, ip } = req;
  const userIp = req.headers['x-real-ip'] || ip;
  const isStaticRoute = isStatic(req);

  if (userIp !== statusServerIp && !isStaticRoute){
    const url = req.originalUrl || req.url;
    const ipData = await ffclient.getIpData(ip);
    const userLocation = `${ipData.city}, ${ipData.country}`
    const requestId = uuidv4();
    const start = process.hrtime();
    const space = "   "

    res.on('finish', () => {
      const [seconds, nanoseconds] = process.hrtime(start);
      const durationInMilliseconds = (seconds * 1000 + nanoseconds / 1e6).toFixed(3);
      const message = `\n{\n${space}ID: ${requestId}\n${space}Method: ${method}\n${space}Route: ${url}\n${space}Request IP: ${userIp}\n${space}Request Location: ${userLocation}\n${space}Status: ${res.statusCode}\n${space}Response time: ${durationInMilliseconds}ms\n}`;
      if (isSuccessfulStatusCode(res.statusCode)){
        logger.info(message);
      } else {
        logger.warn(message);
      }
    });
  }

  next();
};

const isSuccessfulStatusCode = (statusCode) => {
  return statusCode >= 200 && statusCode < 400;
};

module.exports = logRequest;
