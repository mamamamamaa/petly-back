const Joi = require("joi").extend(require("@joi/date"));
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { emailRegex, passwordRegex, mobilePhoneRegex } = require("../helpers");

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
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    favorite: [
      {
        type: Schema.Types.ObjectId,
        ref: "notice",
      },
    ],
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
