const Joi = require('joi')
    .extend(require('@joi/date'));

const ownPetCreateSchema = Joi.object({
  name: Joi.string().min(2).max(16).alphanum(),
  dateOfBirth: Joi.string(),
  breed: Joi.string().min(2).max(16),
  comments: Joi.string().min(8).max(120),
  pictureURL: Joi.array(),
});

module.exports = {
    ownPetCreateSchema,
};