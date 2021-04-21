const database = require("../../models");
const BuildStudentDataAccess = require("./student.dao");

// Get the model from the database
const genderModel = database.Genders;
const studentModel = database.Students;

// Build the data access (inject the model);
const studentDataAccess = BuildStudentDataAccess({ studentModel, genderModel });

module.exports = studentDataAccess;
  