const moment = require('moment');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const randomToken = require("random-token");
const studentDao = require('../../data-access/studentDao');
const BuildSignInService = require('./sign-in.service');
const BuildValidateUserService = require('./vaidate-user.service');

// encrypt password
async function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

// generate jwt function
function generateJWT(userData, rememberMe = false) {
  const sessionTimeOut = rememberMe ? 604800 : 86400;
  return JWT.sign({ data: userData }, process.env.APP_SECRETE, { expiresIn: sessionTimeOut });
}

// verify password function
function verifyPassword(actualPassword, requestPassword) {
  const result = bcrypt.compareSync(requestPassword, actualPassword);
  return result;
}

// generate the random token
async function generateRandomToken () {
  randomToken.create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  const token = await randomToken(52);
  return token;
}

// set token expiry date
async function setTokenExpiryDate() {
  const currentTime = moment().format();
  return moment().add(`${currentTime}`, "D").format("YYYY-MM-DD");
}

// check if password reset tokem has expired
async function checkIfTokenIsExpiried(token) {
  const todaysDate = new Date();
  const tokenExpiryDate = new Date(`${token}`);
  const timeDiff = Math.abs(todaysDate.getTime() - tokenExpiryDate.getTime()); // in milliseconds
  const timeDiffInSec = Math.ceil(timeDiff / 1000);// convert the output to milliseconds
  if (timeDiffInSec >= 86400) return true;
  return false;
}

// check if the user token is valid
async function verifyToken(req) {
  if (!req.headers.authorization) throw new Error("FORBIDDEN.");

  const bearerToken = req.headers.authorization;
  if (!bearerToken) throw new Error("FORBIDDEN.");

  const token = bearerToken.slice(7, bearerToken.length);
  if (!token) throw new Error("FORBIDDEN.");

  const isVerified =  JWT.verify(token, process.env.APP_SECRETE);
  await isVerified;

  return isVerified;
}

// Build the services (inject the userDao)
const validateUserService = BuildValidateUserService({ verifyToken });
const signInService = BuildSignInService({ studentDao, verifyPassword, generateJWT });

// bundle the auth services
const authServices = Object.freeze({ 
  signInService,
  validateUserService,
});

module.exports = authServices;