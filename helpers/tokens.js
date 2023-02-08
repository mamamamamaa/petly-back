const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  EXPIRES_IN: expiresIn,
} = process.env;

const generateAccessToken = (user) => {
  const payload = {
    id: user._id,
    type: "accessToken",
  };

  return jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn,
  });
};

const generateRefreshToken = (user) => {
  const payload = {
    id: user._id,
    type: "refreshToken",
  };

  return jwt.sign(payload, REFRESH_TOKEN_SECRET_KEY);
};

module.exports = { generateAccessToken, generateRefreshToken };
