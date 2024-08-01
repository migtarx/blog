require('dotenv').config();
const express = require('express');
const path = require('path');
const pjson = require('pjson');
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const app = express();
const logger = require('./middlewares/logger');
const { launchLog } = require("./utils/logger.js")
const PORT = process.env.PORT || 3000; 

app.use(express.json())
app.use(cookieParser());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(logger);

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
  await launchLog(PORT, "none");
});

