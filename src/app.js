const createError = require("http-errors");
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const useragent = require('express-useragent');

// Require the http response code
const HTTPStatus = require('./utils/http-status.util');

// Require Routes
const Routes = require('./routes/index');

// Instantiate app
const app = express();

// Define the accepted request type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(useragent.express());
app.use(bodyParser.json());
app.use(express.json());

// Set log for all requests
app.use(morgan('dev'));

//set express view engine to ejs
app.set('view engine', 'ejs');

// Add CORS headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Set content type
  res.setHeader('content-type', 'application/json');

  // Pass to next layer of middleware
  next();
});

// initialize thw app verison
const APP_VERSION = process.env.APP_VERSION || 'v1';

app.use(`/${APP_VERSION}`, Routes);

// Export app module
module.exports = app;