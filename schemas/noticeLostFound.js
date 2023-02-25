const Joi = require("joi");

const addNoticeLostFoundSchema = Joi.object({
  title: Joi.string().min(2).max(20).required(),
  name: Joi.string().min(1).max(20),
  dateOfBirth: Joi.date().allow(""),
  breed: Joi.string().min(2).max(16),
  sex: Joi.string().valid("male", "female").required(),
  place: Joi.string().min(3).max(16).required(),
  type: Joi.string().valid("lost/found").required(),
  comments: Joi.string().min(6).max(100),
});

module.exports = {
  addNoticeLostFoundSchema,
};
