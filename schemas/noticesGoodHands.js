const Joi = require("joi");

const addNoticeGoodHandsSchema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  title: Joi.string().min(2).max(20).required(),
  breed: Joi.string().min(2).max(16),
  dateOfBirth: Joi.date(),
  price: Joi.number(),
  sex: Joi.string().valid("male", "female"),
  place: Joi.string().min(3).max(16).alphanum(),
  comments: Joi.string().min(6).max(100),
  type: Joi.string().valid("good-hands").required(),
});

module.exports = {
  addNoticeGoodHandsSchema,
};
