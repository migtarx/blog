require('dotenv').config();
const express = require('express');
const path = require('path');
const pjson = require('pjson');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const helmet = require('helmet');
const Falconflare = require('@mpuertadev/falconflare-client');
const app = express();
const { assignId, skipStatics, skipStatusServer } = require('./middlewares/morgan');
const PORT = process.env.PORT || 3000; 

app.use(express.json())
app.use(cookieParser());
app.use(helmet({
  contentSecurityPolicy: false
}));
morgan.token('user-ip', function(req) {
  return process.env.ENV == "prod" ? req.headers['x-real-ip'] : req.ip;
});
morgan.token('accepted-cookies', function(req) {
  return Boolean(req.cookies['cookie-accepted']);
});
app.use(async function getLocation(req, res, next) {
  const ffclient = new Falconflare({serverUrl: process.env.FF_URL, accessKey: process.env.FF_PASSWD})
  let ipData;
  try {
    const ip = process.env.ENV == "prod" ? req.headers['x-real-ip'] : req.ip;
    data = await ffclient.getIpData(ip);
  } catch (error) {
    console.error('Error fetching IP location:', error);
    ipData = { country_name: 'Unknown || Error fetching', city: 'Unknown || Error fetching' };
  }
  req.location = `${ipData?.city}, ${ipData?.country_name}`;
  next();
});

morgan.token('location', function(req) {
  return req.location;
});

morgan.token('id', function getId(req) {
  return req.id;
});

app.use(assignId);
app.use(
  morgan('{ \n    Request ID: :id \n    Request IP: :user-ip \n    Request location: :location \n    Method: :method \n    Route: :url \n    Status code: :status  \n    Response time: :response-time \n    Accepted Cookies: :accepted-cookies \n}', {
      skip: function (req, res) {
          return skipStatics(req, res) || skipStatusServer(req, res);
      }
  })
);

app.get('/status', (req, res) => {
  res.json({
    Status: 'OK',
    'Runtime-Mode': process.env.ENV == 'pro' ? 'Production' : 'Development',
    'Application-Version': pjson.version,
    'Application-Description': 'migtarx.com BLOG',
    'Application-Author': 'miguel@mpuerta.dev',
    'Application-Owner': 'Miguel Puerta',
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, async() => {
  console.log(`Server listening in port ${PORT}`);
});

