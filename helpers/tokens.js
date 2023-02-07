const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = process.env;

const generateAccessToken = (user) => {
  const payload = {
    id: user._id,
    type: "accessToken",
  };

  return jwt.sign(payload, ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "23h",
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
