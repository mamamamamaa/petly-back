const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const {
  generateAccessToken,
  generateRefreshToken,
  calculateExpiresTime,
} = require("../../helpers");

const { EXPIRES_IN } = process.env;

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    next(HttpError(409, "Email in use"));
    return;
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  const accessToken = generateAccessToken(newUser);
  const refreshToken = generateRefreshToken(newUser);

  await User.findByIdAndUpdate(newUser._id, { accessToken, refreshToken });

  const expiresIn = calculateExpiresTime(EXPIRES_IN);

  res.status(201).json({
    accessToken,
    refreshToken,
    expiresIn,
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = register;
