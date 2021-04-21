const Joi = require("joi");

const createStudent = {};

// Define the schema
createStudent.schema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  username: Joi.string(),
  password: Joi.string().required(),
  dob: Joi.string().required(),
  genderId: Joi.number().required(),
});

// Validate the schema
createStudent.validate = async (body) => {
  try {
    const result = await createStudent.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = createStudent;