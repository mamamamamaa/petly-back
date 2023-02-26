const bcrypt = require("bcryptjs");
const { sgMail } = require("../../helpers");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const { verificationMessage } = require("../../helpers");

const register = async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(400).json({ message: "Name, email or password not found" });
    return;
  }
  const user = await User.findOne({ email });
  if (user) {
    next(HttpError(409, "Email in use"));
    return;
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const { verifyMessage, verificationToken } = verificationMessage(email);
  await sgMail.send(verifyMessage);
  await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });
  res.status(201).json({
    message: "Verify your account by email",
    name,
    email,
  });
};

module.exports = register;
