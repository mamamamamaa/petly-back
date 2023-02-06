const Joi = require("joi");

const addNoticeSellSchema = Joi.object({
  title: Joi.string().min(2).max(20).required(),
  breed: Joi.string().min(2).max(16),
  dateOfBirth: Joi.date(),
  price: Joi.number().required(),
  sex: Joi.string().valid("male", "female"),
  place: Joi.string().min(3).max(16).alphanum(),
  comments: Joi.string().min(6).max(100),
  type: Joi.string().valid("sell").required(),
});

module.exports = {
  addNoticeSellSchema,
};