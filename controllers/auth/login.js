const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");

const { SECRET_KEY } = process.env;

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

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    name: user.name,
    email: user.email,
  });
};

module.exports = login;
