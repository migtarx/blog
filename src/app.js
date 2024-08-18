require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const app = express();
const logger = require('./middlewares/logger');
const { launchLog } = require("./utils/logger.js")
const { statusRoute } = require('./routes/routes.js');
const PORT = process.env.PORT || 3000; 

app.use(express.json())
app.use(cookieParser());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(logger);
app.use('/status', statusRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, async() => {
  await launchLog(PORT, "none");
});

