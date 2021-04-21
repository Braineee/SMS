const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const passwordGenerator = require("generate-password");
const BuildMakeStudentEntity = require('./student.entity');
const studentSchemas = require('../../schemas/studentSchemas');

function getId() {
  return uuidv4();
}

async function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

async function generatePassword() {
  return passwordGenerator.generate({ length: 10, numbers: true });
}

async function validateCreateStudentData(requestData) {
  return await studentSchemas.createStudentSchema.validate(requestData);
}

async function validateUpdatedStudentData(requestData) {
  return await studentSchemas.updateStudentSchema.validate(requestData);
}

const makeStudentEntity = BuildMakeStudentEntity({ 
  validateCreateStudentData, 
  validateUpdatedStudentData, 
  encryptPassword, 
  getId, 
  generatePassword 
});

module.exports = makeStudentEntity;
