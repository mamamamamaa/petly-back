const Joi = require('joi')
    
const addNoticeSellSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(20)
        .alphanum(),
    breed: Joi.string()
        .min(2)
        .max(16),
    dateOfBirth: Joi.number()
        .integer()
        .min(2010)
        .max(2023),
    place: Joi.string()
        .min(3)
        .max(16)
        .alphanum(),
    comments: Joi.string()
        .min(6)
        .max(100),
    photoUrl: Joi.string(),
    
 });   

    
    module.exports = {
         addNoticeSellSchema,
};