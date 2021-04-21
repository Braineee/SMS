const BuildMakeAuthEntity = require('./auth.entity');
const authSchemas = require('../../schemas/authSchemas');

async function validateSignInData(requestData) {
  return await authSchemas.signInschema.validate(requestData);
}

const makeAuthEntity = BuildMakeAuthEntity({ validateSignInData });

module.exports = makeAuthEntity;