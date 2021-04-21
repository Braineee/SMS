var dateFormat = require("dateformat");
const enrolmentDao = require('../../data-access/enrolmentDao');
const { BuildCreateEnrolmentService } = require('./create-enrolment.service');
const { BuildDeleteEnrolmentService } = require('./delete-enrolment.service');
const { BuildFetchEnrolmentService } = require('./fetch-enrolment.service');

// Build the service (inject the enrolmentDao)
const deleteEnrolmentService = BuildDeleteEnrolmentService({ enrolmentDao });
const createEnrolmentService = BuildCreateEnrolmentService({ enrolmentDao });
const fetchEnrolmentService = BuildFetchEnrolmentService({ enrolmentDao , dateFormat });

// Bundle the services
const enrolmentService = Object.freeze({ 
  fetchEnrolmentService,
  deleteEnrolmentService,
  createEnrolmentService,
});

module.exports = enrolmentService;
  