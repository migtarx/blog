require('dotenv').config();
const { v4: uuidv4 } = require('uuid')

function assignId(req, res, next) {
    req.id = uuidv4();
    next();
}

function skipStatics(req, res) {
    const staticFilesPrefixes = ['/css', '/js', '/images', '/img', '/fonts'];
    return staticFilesPrefixes.some(prefix => req.originalUrl.startsWith(prefix));
}

function skipStatusServer(req, res) {
    const statusServerIP = process.env.STATUS_SERVER_IP;
    return req.headers['x-real-ip'] == statusServerIP;
}

module.exports = {
    assignId,
    skipStatics,
    skipStatusServer
}
  
