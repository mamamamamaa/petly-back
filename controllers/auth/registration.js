const bcrypt = require("bcryptjs");
const { sgMail } = require("../../helpers");
const { User } = require("../../models/user");
const { HttpError } = require("../../middlewares");
const { verificationMessage } = require("../../helpers");

const register = async (req, res, next) => {
  const { email, password } = req.body;
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
  });
};

module.exports = register;
