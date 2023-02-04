const Joi = require("joi");

const ownPetCreateSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(16)
        .alphanum(),
    dateOfBirth: Joi.date()
        .max('now'),
        // .format("DD.MM.YYYY"),
    breed: Joi.string()
        .min(2)
        .max(16),
    comments: Joi.string()
        .min(8)
        .max(120)
});

module.exports = {
    ownPetCreateSchema,
};