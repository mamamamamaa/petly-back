const Joi = require('joi')
    
const addNoticeGoodHandsSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(20)
        .alphanum(),
    breed: Joi.string()
        .min(2)
        .max(16),
    dateOfBirth: Joi.string().
        min(3).max(16),
    place: Joi.string()
        .min(3)
        .max(16)
        .alphanum(),
    comments: Joi.string()
        .min(6)
        .max(100),
    photoUrl: Joi.string(),
    type: Joi.array().default(["good-hands"]).required(),
 });   

    
    module.exports = {
         addNoticeGoodHandsSchema,
};