const handleMongooseError = require("./handleMongooseError");
const ctrlWrapper = require("./ctrlWrapper");
const calculateExpiresTime = require("./expires");
const verificationMessage = require("./verificationMessage");
const sgMail = require("./sgMail");
const { generateRefreshToken, generateAccessToken } = require("./tokens");
const { emailRegex, passwordRegex, mobilePhoneRegex } = require("./regex");

module.exports = {
  handleMongooseError,
  ctrlWrapper,
  calculateExpiresTime,
  verificationMessage,
  sgMail,
  generateRefreshToken,
  generateAccessToken,
  emailRegex,
  passwordRegex,
  mobilePhoneRegex,
};
