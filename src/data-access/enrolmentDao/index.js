const database = require("../../models");
const BuildEnrolmentDataAccess = require("./enrolment.dao");

// Get the model from the database
const enrolmentModel = database.Enrolements;

// Build the data access (inject the model);
const enrolmentDataAccess = BuildEnrolmentDataAccess({ enrolmentModel });

module.exports = enrolmentDataAccess;
  