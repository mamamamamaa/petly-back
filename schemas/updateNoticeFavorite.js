const Joi = require("joi");

const schemaUpdateNoticeFavorite = Joi.object({
    favorite: Joi.boolean().require(),
})

module.exports = schemaUpdateNoticeFavorite;