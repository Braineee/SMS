const Joi = require("joi");

const createEnrolment = {};

// Define the schema
createEnrolment.schema = Joi.object({
  student_uuid: Joi.string().required(),
  course_id: Joi.number().required(),
  course_name: Joi.string().required(),
});

// Validate the schema
createEnrolment.validate = async (body) => {
  try {
    const result = await createEnrolment.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = createEnrolment;