const database = require('../models');
const HTTPStatus = require("../utils/http-status.util");
const { validateUserService } = require('../services/authServices');
const BuildConnectDbMiddleware = require('./connect-db.middleware');
const BuildValidateUserMiddleware = require('./validate-user.middleware');

const connectDbMiddleware = BuildConnectDbMiddleware({ database, HTTPStatus });
const validateUserMiddleware = BuildValidateUserMiddleware({ validateUserService, HTTPStatus });

const middleware = Object.freeze({ connectDbMiddleware, validateUserMiddleware });

module.exports = middleware;