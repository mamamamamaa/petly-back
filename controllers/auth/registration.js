const bcrypt = require("bcryptjs");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    next(HttpError(409, "Email in use"));
    return;
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });

  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    token,
    name: newUser.name,
    email: newUser.email,
  });

};

module.exports = register;
