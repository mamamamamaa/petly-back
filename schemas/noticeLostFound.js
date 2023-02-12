const Joi = require("joi");
const { emailRegex, mobilePhoneRegex } = require("../helpers");

const addNoticeLostFoundSchema = Joi.object({
  title: Joi.string().min(2).max(20).required(),
  name: Joi.string().min(1).max(20),
  dateOfBirth: Joi.date(),
  breed: Joi.string().min(2).max(16),
  sex: Joi.string().valid("male", "female").required(),
  place: Joi.string().min(3).max(16).required(),
  type: Joi.string().valid("lost/found").required(),
  email: Joi.string().pattern(emailRegex).required(),
  phone: Joi.string().pattern(mobilePhoneRegex).required(),
  comments: Joi.string().min(6).max(100),
});

module.exports = {
  addNoticeLostFoundSchema,
};
