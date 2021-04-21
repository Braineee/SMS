const Response = require('../../utils/response-fomartter');
const authServices = require('../../services/authServices');
const BuildSignIncontroller = require('./sign-in.controller');

const signInService = authServices.signInService;

const signInController = BuildSignIncontroller({ signInService, Response });

const authControllers = Object.freeze({
  signInController,
});

module.exports = authControllers;