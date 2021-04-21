const Response = require("../../utils/response-fomartter");
const { createEnrolmentService, fetchEnrolmentService, deleteEnrolmentService } = require('../../services/enrolmentServices');
const { BuildFetchEnrolmentController } = require('./fetch-enrolment.controller');
const { BuildDeleteEnrolmentController } = require('./delete-enrolment.controller');
const { BuildCreateEnrolmentController } = require('./create-enrolment.controller');

const fetchEnrolmentController = BuildFetchEnrolmentController({ fetchEnrolmentService, Response });
const createEnrolmentController = BuildCreateEnrolmentController({ createEnrolmentService, Response });
const deleteEnrolmentController = BuildDeleteEnrolmentController({ deleteEnrolmentService, Response });

const enrolmentControllers = Object.freeze({ 
  fetchEnrolmentController,
  createEnrolmentController,
  deleteEnrolmentController 
});

module.exports = enrolmentControllers;
  