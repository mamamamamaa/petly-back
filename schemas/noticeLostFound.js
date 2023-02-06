const Joi = require('joi')
    
const addNoticeLostFoundSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(20)
        .alphanum(),
    breed: Joi.string()
        .min(2)
        .max(16),
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
         addNoticeLostFoundSchema,
};