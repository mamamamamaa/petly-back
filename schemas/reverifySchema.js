const Joi = require("joi");
const { emailRegex } = require("../helpers");

const reverifySchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
}).required();

module.exports = reverifySchema;
