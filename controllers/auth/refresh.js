const jwt = require("jsonwebtoken");
const { HttpError } = require("../../middlewares");
const { User } = require("../../models/user");
const { generateAccessToken, calculateExpiresTime } = require("../../helpers");
const { REFRESH_TOKEN_SECRET_KEY, EXPIRES_IN } = process.env;

const refresh = async (req, res, next) => {
  const { refreshToken } = req.body;

  if (refreshToken === null) {
    return next(HttpError(401));
  }

  const { id, type } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY);

  if (type !== "refreshToken") {
    return next(HttpError(400, "It's not a refresh token!"));
  }

  const user = await User.findById(id);

  if (
    !user ||
    !user.refreshToken ||
    refreshToken !== String(user.refreshToken)
  ) {
    return next(HttpError(401));
  }

  const accessToken = generateAccessToken(user);

  await User.findByIdAndUpdate(user._id, { accessToken });

  const expiresIn = calculateExpiresTime(EXPIRES_IN);

  res.json({ accessToken, expiresIn });
};

module.exports = refresh;
