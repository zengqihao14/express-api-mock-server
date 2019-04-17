const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const CONFIG = require('./config');

const app = express();

const launch = () => {
  app.use(cors());
  app.use(function (req, res, next) {
    for (key in CONFIG.HEADER) {
      res.header(key, CONFIG.HEADER[key]);
    }
    next();
  });
  app.use((req, res, next) => {
    setTimeout(next, CONFIG.RESPONSE_LATENCY);
  });
  app.use(logger(CONFIG.LOGGER_FORMAT));
  app.use(CONFIG.STATIC_BASE_PATH, express.static(path.join(__dirname, CONFIG.STATIC_SOURCE_PATH)));

  const routes = require(path.join(__dirname, CONFIG.ROUTE_PATH))(app, CONFIG.API_BASE_PATH);
  app.listen(CONFIG.PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://localhost:' + CONFIG.PORT + '\n');
  });
};

launch();
