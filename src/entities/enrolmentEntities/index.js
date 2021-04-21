const { v4: uuidv4 } = require('uuid');
var dateFormat = require("dateformat");
const BuildMakeStudentEntity = require('./enrolment.entity');
const ernrolmentSchemas = require('../../schemas/enrolmentSchemas');

function getId() {
  return uuidv4();
}

async function validateCreateEnrolmentData(requestData) {
  return await ernrolmentSchemas.createEnrolmentSchema.validate(requestData);
}

const makeEnrolmentEntity = BuildMakeStudentEntity({ 
  validateCreateEnrolmentData, 
  dateFormat,
  getId, 
});

module.exports = makeEnrolmentEntity;
