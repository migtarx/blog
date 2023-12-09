require('dotenv').config();
const express = require('express');
const path = require('path');
const pjson = require('pjson');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const { assignId, skipStatics, skipStatusServer } = require('./middlewares/morgan');
const BootService = require('./services/boot.service');
const execMode = BootService.getExecutionMode();
const PORT = process.env.PORT || 3000; 

app.use(express.json())
app.use(cookieParser());
app.use(helmet({
  contentSecurityPolicy: false
}));
morgan.token('user-ip', function(req) {
  return execMode == "pro" ? req.headers['X-Real-IP'] : req.ip;
});
morgan.token('accepted-cookies', function(req) {
  return Boolean(req.cookies['cookie-accepted']);
});
morgan.token('id', function getId(req) {
  return req.id;
});
app.use(assignId);
app.use(
  morgan('New request from [:user-ip] \n{ \n    Request ID: :id \n    Method: :method \n    Route: :url \n    Status code: :status  \n    Response time: :response-time \n    Accepted Cookies: :accepted-cookies \n}', {
      skip: function (req, res) {
          return skipStatics(req, res) || skipStatusServer(req, res);
      }
  })
);

app.get('/status', (req, res) => {
  res.json({
    Status: 'OK',
    'Runtime-Mode': execMode == 'pro' ? 'Production' : 'Development',
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

