const Joi = require("joi").extend(require("@joi/date"));
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const passwordRegex = /[^a-zA-Z0-9\s]/;
const passwordRegex = /^\S*$/;

const mobilePhoneRegex = /^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobilePhone: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post("save", handleMongooseError);

const joiSignupSchema = Joi.object({
  password: Joi.string().min(6).max(32).pattern(passwordRegex).required(),
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

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
