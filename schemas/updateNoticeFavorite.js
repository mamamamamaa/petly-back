const Joi = require("joi");

const schemaUpdateNoticeFavorite = Joi.object({
    favorite: Joi.boolean().required(),
})

module.exports = schemaUpdateNoticeFavorite;