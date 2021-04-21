const studentDao = require('../../data-access/studentDao');
const { BuildCreateStudentService } = require('./create-student.service');
const { BuildVerifyEmailAddressService } = require('./update-student.service');

// Build the service (inject the studentDao)
const createStudentService = BuildCreateStudentService({ studentDao });
const verifyStudentEmailService = BuildVerifyEmailAddressService({ studentDao })

// Bundle the services
const studentService = Object.freeze({ 
  createStudentService,
  verifyStudentEmailService,
});

module.exports = studentService;
  