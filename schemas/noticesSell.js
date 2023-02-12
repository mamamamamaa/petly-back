const Joi = require("joi");
const { emailRegex, mobilePhoneRegex } = require("../helpers");


const addNoticeSellSchema = Joi.object({
  name: Joi.string().min(1).max(20),
  title: Joi.string().min(2).max(20).required(),
  breed: Joi.string().min(2).max(16),
  dateOfBirth: Joi.date(),
  price: Joi.number().required(),
  sex: Joi.string().valid("male", "female"),
  place: Joi.string().min(3).max(16).alphanum(),
  email: Joi.string().pattern(emailRegex).required(),
  phone: Joi.string().pattern(mobilePhoneRegex).required(),
  comments: Joi.string().min(6).max(100),
  type: Joi.string().valid("sell").required(),
});

module.exports = {
  addNoticeSellSchema,
};
