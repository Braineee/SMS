const Response = require('../../utils/response-fomartter');
const { createStudentService, verifyStudentEmailService } = require('../../services/studentServices');
const { BuildVerifyStudentEmailController } = require('./update-student.controller');
const { BuildCreateStudentController } = require('./create-student.controller');

const createStudentController = BuildCreateStudentController({ createStudentService, Response });
const verifyStudentEmailController = BuildVerifyStudentEmailController({ verifyStudentEmailService, Response });

const studentControllers = Object.freeze({ 
  createStudentController,
  verifyStudentEmailController 
});

module.exports = studentControllers;
  