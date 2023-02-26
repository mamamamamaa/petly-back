const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const {
  generateRefreshToken,
  generateAccessToken,
  calculateExpiresTime,
} = require("../../helpers");

const { EXPIRES_IN } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!email || !password || user === null) {
    next(HttpError(401, "Email or password is wrong"));
    return;
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    next(HttpError(401, "Password incorrect"));
    return;
  }
  if (!user.verify) {
    next(409, "You are not verified");
    return;
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });
  const expiresIn = calculateExpiresTime(EXPIRES_IN);
  res.json({
    accessToken,
    refreshToken,
    expiresIn,
    name: user.name,
    email: user.email,
    favorite: user.favorite,
    id: user._id,
  });
};

module.exports = login;
