const express = require('express');
const bodyParser = require('body-parser');
const config = require('./database/config');

module.exports = function createExpressServerWithConfiguration() {
  const app = express();
  app.use(bodyParser.json());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  return app;
};
