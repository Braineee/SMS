const Joi = require("joi");

const signIn = {};

// Define the schema
signIn.schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().required(),
  remember_me: Joi.bool(),
});

// Validate the schema
signIn.validate = async (body) => {
  try {
    const result = await signIn.schema.validateAsync(body);
  } catch (error) {
    throw new Error(error.details[0].message);
  }
};

module.exports = signIn;