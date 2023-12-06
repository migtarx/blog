require('dotenv').config();
const express = require('express');
const path = require('path');
const pjson = require('pjson');
const app = express();
const db = require('./database/connection.js');
const BootService = require('./services/boot.service');
const execMode = BootService.getExecutionMode();
const PORT = process.env.PORT || 3000; 
const Static = require("./models/Static");
let globalViews = 0;

db.then(() => console.log(`Connected to mongodb server`)).catch((err) =>
  console.log(`mongodb connection failed: ${err}`),
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

app.get('/views', (req, res) => {
  res.send(globalViews.toString());
});

app.use(async (req, res, next) => {
  const requestedPath = req.url;

  if (requestedPath.indexOf('.') === -1) {
    console.log('Requested:', requestedPath);
    try {
      let static = await Static.findOne({ staticName: 'GLOBAL' });
      if (!static) {
        static = new Static({
          staticName: 'GLOBAL',
          views: 0
        });
      }
      static.views++;
      const savedStatic = await static.save();
      globalViews = savedStatic.views;
      console.log('Current views:', globalViews);
    } catch (err) {
      console.log('Error:', err);
    }
  }
  
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, async() => {
  console.log(`Server listening in port ${PORT}`);
  try {
    let static = await Static.findOne({ staticName: 'GLOBAL' });
    if (static) {
      globalViews = static.views;
    }
  } catch (err) {
    console.log('Error:', err);
  }
});

