const Joi = require("joi").extend(require("@joi/date"));
const { emailRegex, passwordRegex, mobilePhoneRegex } = require("../helpers");

const joiSignupSchema = Joi.object({
    password: Joi.string().min(7).max(32).pattern(passwordRegex).required(),
    email: Joi.string().pattern(emailRegex).required(),
    name: Joi.string().required(),
    // TODO: add regexp for city field kinda "строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy "
    city: Joi.string().required(),
    mobilePhone: Joi.string().pattern(mobilePhoneRegex).required(),
});

const joiLoginSchema = Joi.object({
    password: Joi.string().min(6).max(32).pattern(passwordRegex).required(),
    email: Joi.string().pattern(emailRegex).required(),
});

const joiUpdateUserSchema = Joi.object({
    password: Joi.string().min(6).max(32).pattern(passwordRegex),
    email: Joi.string().pattern(emailRegex),
    name: Joi.string(),
    city: Joi.string(),
    mobilePhone: Joi.string().pattern(mobilePhoneRegex),
    birthday: Joi.date().max("now").format("DD.MM.YYYY"),
    avatarURL: Joi.string(),
});

const joiRefreshTokenSchema = Joi.object({
    refreshToken: Joi.string().required(),
});

const schemas = {
    joiSignupSchema,
    joiLoginSchema,
    joiUpdateUserSchema,
    joiRefreshTokenSchema,
};

module.exports = {
    schemas,
};