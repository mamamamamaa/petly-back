const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const { generateRefreshToken, generateAccessToken } = require("../../helpers");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    next(HttpError(409, "Email or password invalid"));
    return;
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    next(HttpError(409, "Email or password invalid"));
    return;
  }

  const accessToken = generateAccessToken(user);

  const refreshToken = generateRefreshToken(user);

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  res.json({
    accessToken,
    refreshToken,
    name: user.name,
    email: user.email,
  });
};

module.exports = login;
